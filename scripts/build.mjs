// @ts-check
import esbuild from "esbuild";
import { copyFile, readFile, writeFile, rm } from "fs/promises";
import { glob } from "glob";

/**
 * @type {esbuild.BuildOptions}
 */
const sharedOptions = {
  sourcemap: "external",
  sourcesContent: true,
  minify: false,
  allowOverwrite: true,
  packages: "external",
};

async function main() {
  // Start with a clean slate
  await rm("pkg", { recursive: true, force: true });
  // Build the source code for a neutral platform as ESM
  await esbuild.build({
    entryPoints: await glob(["./src/*.ts", "./src/**/*.ts"]),
    outdir: "pkg/dist-src",
    bundle: false,
    platform: "neutral",
    format: "esm",
    ...sharedOptions,
    sourcemap: false,
  });

  // Remove the types file from the dist-src folder
  const typeFiles = await glob([
    "./pkg/dist-src/**/types.js.map",
    "./pkg/dist-src/**/types.js",
  ]);
  for (const typeFile of typeFiles) {
    await rm(typeFile);
  }

  const entryPoints = ["./pkg/dist-src/index.js"];

  await Promise.all([
    // Build the a CJS Node.js bundle
    esbuild.build({
      entryPoints,
      outdir: "pkg/dist-node",
      bundle: true,
      platform: "node",
      target: "node18",
      format: "cjs",
      ...sharedOptions,
    }),
    // Build an ESM browser bundle
    esbuild.build({
      entryPoints,
      outdir: "pkg/dist-web",
      bundle: true,
      platform: "browser",
      format: "esm",
      ...sharedOptions,
    }),
  ]);

  // Copy the README, LICENSE to the pkg folder
  await copyFile("LICENSE", "pkg/LICENSE");
  await copyFile("README.md", "pkg/README.md");

  // Handle the package.json
  let pkg = JSON.parse((await readFile("package.json", "utf8")).toString());
  // Remove unnecessary fields from the package.json
  delete pkg.scripts;
  delete pkg.prettier;
  delete pkg.release;
  delete pkg.jest;
  await writeFile(
    "pkg/package.json",
    JSON.stringify(
      {
        ...pkg,
        files: ["dist-*/**", "bin/**"],
        main: "dist-node/index.js",
        module: "dist-web/index.js",
        types: "dist-types/index.d.ts",
        source: "dist-src/index.js",
        sideEffects: false,
      },
      null,
      2
    )
  );
}
main();
