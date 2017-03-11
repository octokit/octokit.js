/**
 * This declaration file requires TypeScript 2.1 or above.
 */

declare namespace Github {
  export type WellKnownHeader =
    | "Authorization"
    | "If-Modified-Since"
    | "If-None-Match"
    | "Cookie"
    | "User-Agent"
    | "Accept"
    | "X-GitHub-OTP"
    ;

  export interface EmptyParams {
  }
  
  export interface Options {
    debug?: boolean;
    protocol?: string;
    host?: string;
    pathPrefix?: string;
    headers?: {[header: string]: any};
    Promise?: typeof Promise;
    followRedirects?: boolean;
    timeout?: number;
  }

  export interface AuthBasic  {
    type: "basic";
    username: string;
    password: string;
  }

  export interface AuthOAuthToken  {
    type: "oauth";
    token: string;
  }

  export interface AuthOAuthSecret  {
    type: "oauth";
    key: string;
    secret: string;
  }

  export interface AuthUserToken  {
    type: "token";
    token: string;
  }

  export interface AuthJWT  {
    type: "integration";
    token: string;
  }

  export type Auth =
    | AuthBasic
    | AuthOAuthToken
    | AuthOAuthSecret
    | AuthUserToken
    | AuthJWT;

  export type Link =
    | { link: string; }
    | { meta: { link: string; }; }
    | string;

  export interface Callback {
    (error: Error | null, result: any): any;
  }

  export interface Files { files: string; }
  export interface Owner { owner: string; }
  export interface Username { username: string; }
  export interface Org { org: string; }
  export interface Repo { repo: string; }
  export interface Branch { branch: string; }
  export interface Sha { sha: string; }
  export interface Description { description?: string; }
  export interface Id { id: string; }
  export interface GistId { gist_id: string; }
  export interface InstallationId { installation_id: string; }
  export interface RepositoryId { repository_id: string; }
  export interface CommitId { commit_id: string; }
  export interface ClientId { client_id?: string; }
  export interface ColumnId { column_id: string; }
  export interface ProjectId { project_id: string; }
  export interface RepoId { repo_id: string; }
  export interface InvitationId { invitation_id: string; }
  export interface Ref { ref: string; }
  export interface Number { number: number; }
  export interface IssueNumber { issue_number: number; }
  export interface Name { name: string; }
  export interface Direction { direction?: "asc"|"desc"; }
  export interface Since { since?: Date; }
  export interface Until { until?: Date; }
  export interface State { state?: "open"|"closed"|"all"; }
  export interface Color { color: string; }
  export interface Base { base: string; }
  export interface Head { head: string; }
  export interface Path { path: string; }
  export interface Position { position: number; }
  export interface Body { body: string; }
  export interface Homepage { homepage?: string; }
  export interface Private { private?: boolean; }
  export interface HasIssues { has_issues?: boolean; }
  export interface HasWiki { has_wiki?: boolean; }
  export interface HasDownloads { has_downloads?: boolean; }
  export interface DefaultBranch { default_branch?: string; }
  export interface Title { title: string; }
  export interface Key { key: string; }
  export interface Page { page?: number; }
  export interface PerPage { per_page?: number; }
  export interface Scopes { scopes?: string[]; }
  export interface Note { note?: string; }
  export interface NoteUrl { note_url?: string; }
  export interface AutoInit { auto_init?: boolean; }
  export interface GitignoreTemplate { gitignore_template?: string; }
  export interface LicenseTemplate { license_template?: string; }
  export interface Order { order?: "asc"|"desc"; }
  export interface Q { q: string; }
  export interface Data { data: string; }
  export interface Privacy { privacy?: "secret"|"closed"; }
  export interface Fingerprint { fingerprint?: string; }
  export interface AccessToken { access_token: string; }
  export interface Assignees { assignees?: string[]; }

  export type AuthorizationGetGrantsParams =
    & Page
    & PerPage
    ;
  export type AuthorizationGetGrantParams =
    & Id
    & Page
    & PerPage
    ;
  export type AuthorizationDeleteGrantParams =
    & Id
    ;
  export type AuthorizationGetAllParams =
    & Page
    & PerPage
    ;
  export type AuthorizationGetParams =
    & Id
    ;
  export type AuthorizationCreateParams =
    & Scopes
    & Note
    & NoteUrl
    & ClientId
    & Fingerprint
    & {
      client_secret?: string;
    };
  export type AuthorizationGetOrCreateAuthorizationForAppParams =
    & ClientId
    & Scopes
    & Note
    & NoteUrl
    & Fingerprint
    & {
      client_secret: string;
    };
  export type AuthorizationGetOrCreateAuthorizationForAppAndFingerprintParams =
    & ClientId
    & Fingerprint
    & Scopes
    & Note
    & NoteUrl
    & {
      client_secret: string;
    };
  export type AuthorizationUpdateParams =
    & Id
    & Scopes
    & Note
    & NoteUrl
    & Fingerprint
    & {
      add_scopes?: string[];
      remove_scopes?: string[];
    };
  export type AuthorizationDeleteParams =
    & Id
    ;
  export type AuthorizationCheckParams =
    & ClientId
    & AccessToken
    ;
  export type AuthorizationResetParams =
    & ClientId
    & AccessToken
    ;
  export type AuthorizationRevokeParams =
    & ClientId
    & AccessToken
    ;
  export type ActivityGetEventsParams =
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForRepoParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForRepoIssuesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForRepoNetworkParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForOrgParams =
    & Org
    & Page
    & PerPage
    ;
  export type ActivityGetEventsReceivedParams =
    & Username
    & Page
    & PerPage
    ;
  export type ActivityGetEventsReceivedPublicParams =
    & Username
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForUserPublicParams =
    & Username
    & Page
    & PerPage
    ;
  export type ActivityGetEventsForUserOrgParams =
    & Username
    & Org
    & Page
    & PerPage
    ;
  export type ActivityGetNotificationsParams =
    & Since
    & {
      all?: boolean;
      participating?: boolean;
      before?: string;
    };
  export type ActivityGetNotificationsForUserParams =
    & Owner
    & Repo
    & Since
    & {
      all?: boolean;
      participating?: boolean;
      before?: string;
    };
  export type ActivityMarkNotificationsAsReadParams =
    & {
      last_read_at?: string;
    };
  export type ActivityMarkNotificationsAsReadForRepoParams =
    & Owner
    & Repo
    & {
      last_read_at?: string;
    };
  export type ActivityGetNotificationThreadParams =
    & Id
    ;
  export type ActivityMarkNotificationThreadAsReadParams =
    & Id
    ;
  export type ActivityCheckNotificationThreadSubscriptionParams =
    & Id
    ;
  export type ActivitySetNotificationThreadSubscriptionParams =
    & Id
    & {
      subscribed?: boolean;
      ignored?: boolean;
    };
  export type ActivityDeleteNotificationThreadSubscriptionParams =
    & Id
    ;
  export type ActivityGetStargazersForRepoParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityGetStarredReposForUserParams =
    & Username
    & Direction
    & Page
    & PerPage
    & {
      sort?: "created"|"updated";
    };
  export type ActivityGetStarredReposParams =
    & Direction
    & Page
    & PerPage
    & {
      sort?: "created"|"updated";
    };
  export type ActivityCheckStarringRepoParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityStarRepoParams =
    & Owner
    & Repo
    ;
  export type ActivityUnstarRepoParams =
    & Owner
    & Repo
    ;
  export type ActivityGetWatchersForRepoParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivityGetWatchedReposForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type ActivityGetWatchedReposParams =
    & Page
    & PerPage
    ;
  export type ActivityGetRepoSubscriptionParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ActivitySetRepoSubscriptionParams =
    & Owner
    & Repo
    & {
      subscribed?: boolean;
      ignored?: boolean;
    };
  export type ActivityUnwatchRepoParams =
    & Owner
    & Repo
    ;
  export type GistsGetForUserParams =
    & Username
    & Since
    & Page
    & PerPage
    ;
  export type GistsGetAllParams =
    & Since
    & Page
    & PerPage
    ;
  export type GistsGetPublicParams =
    & Since
    ;
  export type GistsGetStarredParams =
    & Since
    ;
  export type GistsGetParams =
    & Id
    ;
  export type GistsGetRevisionParams =
    & Id
    & Sha
    ;
  export type GistsCreateParams =
    & Files
    & Description
    & {
      public: boolean;
    };
  export type GistsEditParams =
    & Id
    & Description
    & Files
    & {
      content?: string;
      filename?: string;
    };
  export type GistsGetCommitsParams =
    & Id
    ;
  export type GistsStarParams =
    & Id
    ;
  export type GistsUnstarParams =
    & Id
    ;
  export type GistsCheckStarParams =
    & Id
    ;
  export type GistsForkParams =
    & Id
    ;
  export type GistsGetForksParams =
    & Id
    & Page
    & PerPage
    ;
  export type GistsDeleteParams =
    & Id
    ;
  export type GistsGetCommentsParams =
    & GistId
    ;
  export type GistsGetCommentParams =
    & GistId
    & Id
    ;
  export type GistsCreateCommentParams =
    & GistId
    & Body
    ;
  export type GistsEditCommentParams =
    & GistId
    & Id
    & Body
    ;
  export type GistsDeleteCommentParams =
    & GistId
    & Id
    ;
  export type GitdataGetBlobParams =
    & Owner
    & Repo
    & Sha
    & Page
    & PerPage
    ;
  export type GitdataCreateBlobParams =
    & Owner
    & Repo
    & {
      content: string;
      encoding: string;
    };
  export type GitdataGetCommitParams =
    & Owner
    & Repo
    & Sha
    ;
  export type GitdataCreateCommitParams =
    & Owner
    & Repo
    & {
      message: string;
      tree: string;
      parents: string[];
      author?: string;
      committer?: string;
    };
  export type GitdataGetCommitSignatureVerificationParams =
    & Owner
    & Repo
    & Sha
    ;
  export type GitdataGetReferenceParams =
    & Owner
    & Repo
    & Ref
    ;
  export type GitdataGetReferencesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type GitdataGetTagsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type GitdataCreateReferenceParams =
    & Owner
    & Repo
    & Sha
    & {
      ref: string;
    };
  export type GitdataUpdateReferenceParams =
    & Owner
    & Repo
    & Ref
    & Sha
    & {
      force?: boolean;
    };
  export type GitdataDeleteReferenceParams =
    & Owner
    & Repo
    & Ref
    ;
  export type GitdataGetTagParams =
    & Owner
    & Repo
    & Sha
    ;
  export type GitdataCreateTagParams =
    & Owner
    & Repo
    & {
      tag: string;
      message: string;
      object: string;
      type: string;
      tagger: string;
    };
  export type GitdataGetTagSignatureVerificationParams =
    & Owner
    & Repo
    & Sha
    ;
  export type GitdataGetTreeParams =
    & Owner
    & Repo
    & Sha
    & {
      recursive?: boolean;
    };
  export type GitdataCreateTreeParams =
    & Owner
    & Repo
    & {
      tree: string;
      base_tree?: string;
    };
  export type IntegrationsGetInstallationsParams =
    & Page
    & PerPage
    ;
  export type IntegrationsCreateInstallationTokenParams =
    & InstallationId
    & {
      user_id?: string;
    };
  export type IntegrationsGetUserIdentityParams =
    & {
      nonce?: string;
    };
  export type IntegrationsGetInstallationRepositoriesParams =
    & {
      user_id?: string;
    };
  export type IntegrationsAddRepoToInstallationParams =
    & InstallationId
    & RepositoryId
    ;
  export type IntegrationsRemoveRepoFromInstallationParams =
    & InstallationId
    & RepositoryId
    ;
  export type IssuesGetAllParams =
    & Direction
    & Since
    & Page
    & PerPage
    & {
      filter?: "all"|"assigned"|"created"|"mentioned"|"subscribed";
      state?: "open"|"closed"|"all";
      labels?: string;
      sort?: "created"|"updated"|"comments";
    };
  export type IssuesGetForUserParams =
    & Direction
    & Since
    & Page
    & PerPage
    & {
      filter?: "all"|"assigned"|"created"|"mentioned"|"subscribed";
      state?: "open"|"closed"|"all";
      labels?: string;
      sort?: "created"|"updated"|"comments";
    };
  export type IssuesGetForOrgParams =
    & Org
    & Direction
    & Since
    & Page
    & PerPage
    & {
      filter?: "all"|"assigned"|"created"|"mentioned"|"subscribed";
      state?: "open"|"closed"|"all";
      labels?: string;
      sort?: "created"|"updated"|"comments";
    };
  export type IssuesGetForRepoParams =
    & Owner
    & Repo
    & Direction
    & Since
    & Page
    & PerPage
    & {
      milestone?: string;
      state?: "open"|"closed"|"all";
      assignee?: string;
      creator?: string;
      mentioned?: string;
      labels?: string;
      sort?: "created"|"updated"|"comments";
    };
  export type IssuesGetParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesCreateParams =
    & Owner
    & Repo
    & Assignees
    & {
      title: string;
      body?: string;
      assignee?: string;
      milestone?: number;
      labels?: string[];
    };
  export type IssuesEditParams =
    & Owner
    & Repo
    & Number
    & Assignees
    & {
      title?: string;
      body?: string;
      assignee?: string;
      state?: "open"|"closed";
      milestone?: number;
      labels?: string[];
    };
  export type IssuesLockParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesUnlockParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesGetAssigneesParams =
    & Owner
    & Repo
    ;
  export type IssuesCheckAssigneeParams =
    & Owner
    & Repo
    & {
      assignee: string;
    };
  export type IssuesAddAssigneesToIssueParams =
    & Owner
    & Repo
    & Number
    & {
      assignees: string[];
    };
  export type IssuesRemoveAssigneesFromIssueParams =
    & Owner
    & Repo
    & Number
    & Assignees
    ;
  export type IssuesGetCommentsParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type IssuesGetCommentsForRepoParams =
    & Owner
    & Repo
    & Direction
    & Since
    & Page
    & PerPage
    & {
      sort?: "created"|"updated";
    };
  export type IssuesGetCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type IssuesCreateCommentParams =
    & Owner
    & Repo
    & Number
    & Body
    ;
  export type IssuesEditCommentParams =
    & Owner
    & Repo
    & Id
    & Body
    ;
  export type IssuesDeleteCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type IssuesGetEventsParams =
    & Owner
    & Repo
    & IssueNumber
    & Page
    & PerPage
    ;
  export type IssuesGetEventsForRepoParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type IssuesGetEventParams =
    & Owner
    & Repo
    & Id
    ;
  export type IssuesGetLabelsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type IssuesGetLabelParams =
    & Owner
    & Repo
    & Name
    ;
  export type IssuesCreateLabelParams =
    & Owner
    & Repo
    & Name
    & Color
    ;
  export type IssuesUpdateLabelParams =
    & Owner
    & Repo
    & Color
    & {
      oldname: string;
      name: string;
    };
  export type IssuesDeleteLabelParams =
    & Owner
    & Repo
    & Name
    ;
  export type IssuesGetIssueLabelsParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesAddLabelsParams =
    & Owner
    & Repo
    & Number
    & {
      labels: string[];
    };
  export type IssuesRemoveLabelParams =
    & Owner
    & Repo
    & Number
    & {
      name: string;
    };
  export type IssuesReplaceAllLabelsParams =
    & Owner
    & Repo
    & Number
    & {
      labels: string[];
    };
  export type IssuesRemoveAllLabelsParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesGetMilestoneLabelsParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesGetMilestonesParams =
    & Owner
    & Repo
    & State
    & Page
    & PerPage
    & {
      sort?: "due_on"|"completeness";
      direction?: "asc"|"desc";
    };
  export type IssuesGetMilestoneParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesCreateMilestoneParams =
    & Owner
    & Repo
    & State
    & Description
    & {
      title: string;
      due_on?: Date;
    };
  export type IssuesUpdateMilestoneParams =
    & Owner
    & Repo
    & Number
    & State
    & Description
    & {
      title: string;
      due_on?: Date;
    };
  export type IssuesDeleteMilestoneParams =
    & Owner
    & Repo
    & Number
    ;
  export type IssuesGetEventsTimelineParams =
    & Owner
    & Repo
    & IssueNumber
    & Page
    & PerPage
    ;
  export type MigrationsStartMigrationParams =
    & Org
    & {
      repositories: string[];
      lock_repositories?: boolean;
      exclude_attachments?: boolean;
    };
  export type MigrationsGetMigrationsParams =
    & Org
    & Page
    & PerPage
    ;
  export type MigrationsGetMigrationStatusParams =
    & Org
    & Id
    ;
  export type MigrationsGetMigrationArchiveLinkParams =
    & Org
    & Id
    ;
  export type MigrationsDeleteMigrationArchiveParams =
    & Org
    & Id
    ;
  export type MigrationsUnlockRepoLockedForMigrationParams =
    & Org
    & Id
    & {
      repo_name: string;
    };
  export type MigrationsStartImportParams =
    & Owner
    & Repo
    & {
      vcs_url: string;
      vcs?: "subversion"|"git"|"mercurial"|"tfvc";
      vcs_username?: string;
      vcs_password?: string;
      tfvc_project?: string;
    };
  export type MigrationsGetImportProgressParams =
    & Owner
    & Repo
    ;
  export type MigrationsUpdateImportParams =
    & Owner
    & Repo
    ;
  export type MigrationsGetImportCommitAuthorsParams =
    & Owner
    & Repo
    & {
      since?: string;
    };
  export type MigrationsMapImportCommitAuthorParams =
    & Owner
    & Repo
    & {
      author_id: string;
      email?: string;
      name?: string;
    };
  export type MigrationsSetImportLfsPreferenceParams =
    & Owner
    & Name
    & {
      use_lfs: string;
    };
  export type MigrationsGetLargeImportFilesParams =
    & Owner
    & Name
    ;
  export type MigrationsCancelImportParams =
    & Owner
    & Repo
    ;
  export type MiscGetGitignoreTemplateParams =
    & {
      name: string;
    };
  export type MiscGetLicenseParams =
    & {
      license: string;
    };
  export type MiscGetRepoLicenseParams =
    & Owner
    & Repo
    ;
  export type MiscRenderMarkdownParams =
    & {
      text: string;
      mode?: "markdown"|"gfm";
      context?: string;
    };
  export type MiscRenderMarkdownRawParams =
    & Data
    ;
  export type OrgsGetAllParams =
    & Page
    & PerPage
    & {
      since?: string;
    };
  export type OrgsGetForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type OrgsGetParams =
    & Org
    & Page
    & PerPage
    ;
  export type OrgsUpdateParams =
    & Org
    & {
      billing_email?: string;
      company?: string;
      email?: string;
      location?: string;
      name?: string;
      description?: string;
      default_repository_permission?: "read"|"write"|"admin"|"none";
      members_can_create_repositories?: boolean;
    };
  export type OrgsGetMembersParams =
    & Org
    & Page
    & PerPage
    & {
      filter?: "all"|"2fa_disabled";
      role?: "all"|"admin"|"member";
    };
  export type OrgsCheckMembershipParams =
    & Org
    & Username
    ;
  export type OrgsRemoveMemberParams =
    & Org
    & Username
    ;
  export type OrgsGetPublicMembersParams =
    & Org
    ;
  export type OrgsCheckPublicMembershipParams =
    & Org
    & Username
    ;
  export type OrgsPublicizeMembershipParams =
    & Org
    & Username
    ;
  export type OrgsConcealMembershipParams =
    & Org
    & Username
    ;
  export type OrgsGetOrgMembershipParams =
    & Org
    & Username
    ;
  export type OrgsAddOrgMembershipParams =
    & Org
    & Username
    & {
      role: "admin"|"member";
    };
  export type OrgsRemoveOrgMembershipParams =
    & Org
    & Username
    ;
  export type OrgsGetPendingOrgInvitesParams =
    & Org
    ;
  export type OrgsGetOutsideCollaboratorsParams =
    & Org
    & Page
    & PerPage
    ;
  export type OrgsRemoveOutsideCollaboratorParams =
    & Org
    & Username
    ;
  export type OrgsConvertMemberToOutsideCollaboratorParams =
    & Org
    & Username
    ;
  export type OrgsGetTeamsParams =
    & Org
    & Page
    & PerPage
    ;
  export type OrgsGetTeamParams =
    & Id
    ;
  export type OrgsCreateTeamParams =
    & Org
    & Name
    & Privacy
    & {
      description?: string;
      maintainers?: string[];
      repo_names?: string[];
    };
  export type OrgsEditTeamParams =
    & Id
    & Name
    & Privacy
    & {
      description?: string;
    };
  export type OrgsDeleteTeamParams =
    & Id
    ;
  export type OrgsGetTeamMembersParams =
    & Id
    & Page
    & PerPage
    & {
      role?: "member"|"maintainer"|"all";
    };
  export type OrgsGetTeamMembershipParams =
    & Id
    & Username
    ;
  export type OrgsAddTeamMembershipParams =
    & Id
    & Username
    & {
      role?: "member"|"maintainer";
    };
  export type OrgsRemoveTeamMembershipParams =
    & Id
    & Username
    ;
  export type OrgsGetTeamReposParams =
    & Id
    & Page
    & PerPage
    ;
  export type OrgsGetPendingTeamInvitesParams =
    & Id
    & Page
    & PerPage
    ;
  export type OrgsCheckTeamRepoParams =
    & Id
    & Owner
    & Repo
    ;
  export type OrgsAddTeamRepoParams =
    & Id
    & Org
    & Repo
    & {
      permission?: "pull"|"push"|"admin";
    };
  export type OrgsDeleteTeamRepoParams =
    & Id
    & Owner
    & Repo
    ;
  export type OrgsGetHooksParams =
    & Org
    & Page
    & PerPage
    ;
  export type OrgsGetHookParams =
    & Org
    & Id
    ;
  export type OrgsCreateHookParams =
    & Org
    & {
      name: string;
      config: string;
      events?: string[];
      active?: boolean;
    };
  export type OrgsEditHookParams =
    & Org
    & Id
    & {
      config: string;
      events?: string[];
      active?: boolean;
    };
  export type OrgsPingHookParams =
    & Org
    & Id
    ;
  export type OrgsDeleteHookParams =
    & Org
    & Id
    ;
  export type OrgsGetBlockedUsersParams =
    & Org
    & Page
    & PerPage
    ;
  export type OrgsCheckBlockedUserParams =
    & Org
    & Username
    ;
  export type OrgsBlockUserParams =
    & Org
    & Username
    ;
  export type OrgsUnblockUserParams =
    & Org
    & Username
    ;
  export type ProjectsGetRepoProjectsParams =
    & Owner
    & Repo
    ;
  export type ProjectsGetOrgProjectsParams =
    & Org
    ;
  export type ProjectsGetProjectParams =
    & Id
    ;
  export type ProjectsCreateRepoProjectParams =
    & Owner
    & Repo
    & Name
    & {
      body?: string;
    };
  export type ProjectsCreateOrgProjectParams =
    & Org
    & Name
    & {
      body?: string;
    };
  export type ProjectsUpdateProjectParams =
    & Id
    & Name
    & {
      body?: string;
    };
  export type ProjectsDeleteProjectParams =
    & Id
    ;
  export type ProjectsGetProjectCardsParams =
    & ColumnId
    ;
  export type ProjectsGetProjectCardParams =
    & Id
    ;
  export type ProjectsCreateProjectCardParams =
    & ColumnId
    & {
      note?: string;
      content_id?: string;
      content_type?: string;
    };
  export type ProjectsUpdateProjectCardParams =
    & Id
    & {
      note?: string;
    };
  export type ProjectsDeleteProjectCardParams =
    & Id
    ;
  export type ProjectsMoveProjectCardParams =
    & Id
    & {
      position: string;
      column_id?: string;
    };
  export type ProjectsGetProjectColumnsParams =
    & ProjectId
    ;
  export type ProjectsGetProjectColumnParams =
    & Id
    ;
  export type ProjectsCreateProjectColumnParams =
    & ProjectId
    & Name
    ;
  export type ProjectsUpdateProjectColumnParams =
    & Id
    & Name
    ;
  export type ProjectsDeleteProjectColumnParams =
    & Id
    ;
  export type ProjectsMoveProjectColumnParams =
    & Id
    & {
      position: string;
    };
  export type PullRequestsGetAllParams =
    & Owner
    & Repo
    & Direction
    & Page
    & PerPage
    & {
      state?: "open"|"closed"|"all";
      head?: string;
      base?: string;
      sort?: "created"|"updated"|"popularity"|"long-running";
    };
  export type PullRequestsGetParams =
    & Owner
    & Repo
    & Number
    ;
  export type PullRequestsCreateParams =
    & Owner
    & Repo
    & Head
    & Base
    & {
      title: string;
      body?: string;
      maintainer_can_modify?: boolean;
    };
  export type PullRequestsCreateFromIssueParams =
    & Owner
    & Repo
    & Head
    & Base
    & {
      issue: number;
    };
  export type PullRequestsUpdateParams =
    & Owner
    & Repo
    & Number
    & State
    & {
      title?: string;
      body?: string;
      base?: string;
    };
  export type PullRequestsGetCommitsParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsGetFilesParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsCheckMergedParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsMergeParams =
    & Owner
    & Repo
    & Number
    & {
      commit_title?: string;
      commit_message?: string;
      sha?: string;
      merge_method?: "merge"|"squash"|"rebase";
    };
  export type PullRequestsGetReviewsParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsGetReviewParams =
    & Owner
    & Repo
    & Number
    & Id
    ;
  export type PullRequestsGetReviewCommentsParams =
    & Owner
    & Repo
    & Number
    & Id
    & Page
    & PerPage
    ;
  export type PullRequestsCreateReviewParams =
    & Owner
    & Repo
    & Number
    & {
      body?: string;
      event?: "APPROVE"|"REQUEST_CHANGES"|"COMMENT"|"PENDING";
      comments?: string[];
      path?: string;
      position?: number;
    };
  export type PullRequestsSubmitReviewParams =
    & Owner
    & Repo
    & Number
    & Id
    & {
      body?: string;
      event?: "APPROVE"|"REQUEST_CHANGES"|"COMMENT"|"PENDING";
    };
  export type PullRequestsDismissReviewParams =
    & Owner
    & Repo
    & Number
    & Id
    & Page
    & PerPage
    & {
      message?: string;
    };
  export type PullRequestsGetCommentsParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsGetCommentsForRepoParams =
    & Owner
    & Repo
    & Direction
    & Since
    & Page
    & PerPage
    & {
      sort?: "created"|"updated";
    };
  export type PullRequestsGetCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type PullRequestsCreateCommentParams =
    & Owner
    & Repo
    & Number
    & Body
    & CommitId
    & Path
    & Position
    ;
  export type PullRequestsCreateCommentReplyParams =
    & Owner
    & Repo
    & Number
    & Body
    & {
      in_reply_to: number;
    };
  export type PullRequestsEditCommentParams =
    & Owner
    & Repo
    & Id
    & Body
    ;
  export type PullRequestsDeleteCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type PullRequestsGetReviewRequestsParams =
    & Owner
    & Repo
    & Number
    & Page
    & PerPage
    ;
  export type PullRequestsCreateReviewRequestParams =
    & Owner
    & Repo
    & Number
    & {
      reviewers?: string[];
    };
  export type PullRequestsDeleteReviewRequestParams =
    & Owner
    & Repo
    & Number
    & {
      reviewers?: string[];
    };
  export type ReactionsGetForCommitCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content?: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsCreateForCommitCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsGetForIssueParams =
    & Owner
    & Repo
    & Number
    & {
      content?: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsCreateForIssueParams =
    & Owner
    & Repo
    & Number
    & {
      content: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsGetForIssueCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content?: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsCreateForIssueCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsGetForPullRequestReviewCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content?: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsCreateForPullRequestReviewCommentParams =
    & Owner
    & Repo
    & Id
    & {
      content: "+1"|"-1"|"laugh"|"confused"|"heart"|"hooray";
    };
  export type ReactionsDeleteParams =
    & Id
    ;
  export type ReposGetAllParams =
    & Direction
    & Page
    & PerPage
    & {
      visibility?: "all"|"public"|"private";
      affiliation?: string;
      type?: "all"|"owner"|"public"|"private"|"member";
      sort?: "created"|"updated"|"pushed"|"full_name";
    };
  export type ReposGetForUserParams =
    & Username
    & Direction
    & Page
    & PerPage
    & {
      type?: "all"|"owner"|"member";
      sort?: "created"|"updated"|"pushed"|"full_name";
    };
  export type ReposGetForOrgParams =
    & Org
    & Page
    & PerPage
    & {
      type?: "all"|"public"|"private"|"forks"|"sources"|"member";
    };
  export type ReposGetPublicParams =
    & {
      since?: string;
    };
  export type ReposGetByIdParams =
    & Id
    ;
  export type ReposCreateParams =
    & Name
    & Description
    & Homepage
    & Private
    & HasIssues
    & HasWiki
    & HasDownloads
    & AutoInit
    & GitignoreTemplate
    & LicenseTemplate
    & {
      team_id?: number;
      allow_squash_merge?: boolean;
      allow_merge_commit?: boolean;
      allow_rebase_merge?: boolean;
    };
  export type ReposGetParams =
    & Owner
    & Repo
    ;
  export type ReposCreateForOrgParams =
    & Org
    & Name
    & Description
    & Homepage
    & Private
    & HasIssues
    & HasWiki
    & HasDownloads
    & AutoInit
    & GitignoreTemplate
    & LicenseTemplate
    & {
      team_id?: number;
      allow_squash_merge?: boolean;
      allow_merge_commit?: boolean;
      allow_rebase_merge?: boolean;
    };
  export type ReposEditParams =
    & Owner
    & Repo
    & Name
    & Description
    & Homepage
    & Private
    & HasIssues
    & HasWiki
    & HasDownloads
    & DefaultBranch
    & {
      allow_squash_merge?: boolean;
      allow_merge_commit?: boolean;
      allow_rebase_merge?: boolean;
    };
  export type ReposGetContributorsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      anon?: boolean;
    };
  export type ReposGetLanguagesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetTeamsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetTagsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposDeleteParams =
    & Owner
    & Repo
    ;
  export type ReposGetBranchesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      protected?: boolean;
    };
  export type ReposGetBranchParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposGetBranchProtectionParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposUpdateBranchProtectionParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    & {
      required_status_checks: string;
      required_pull_request_reviews: string;
      restrictions: string;
    };
  export type ReposRemoveBranchProtectionParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposGetProtectedBranchRequiredStatusChecksParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposUpdateProtectedBranchRequiredStatusChecksParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    & {
      include_admins?: boolean;
      strict?: boolean;
      contexts?: string[];
    };
  export type ReposRemoveProtectedBranchRequiredStatusChecksParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposGetProtectedBranchRequiredStatusChecksContextsParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposReplaceProtectedBranchRequiredStatusChecksContextsParams =
    & Owner
    & Repo
    & Branch
    & {
      contexts: string[];
    };
  export type ReposAddProtectedBranchRequiredStatusChecksContextsParams =
    & Owner
    & Repo
    & Branch
    & {
      contexts: string[];
    };
  export type ReposRemoveProtectedBranchRequiredStatusChecksContextsParams =
    & Owner
    & Repo
    & Branch
    & {
      contexts: string[];
    };
  export type ReposGetProtectedBranchPullRequestReviewEnforcementParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposUpdateProtectedBranchPullRequestReviewEnforcementParams =
    & Owner
    & Repo
    & Branch
    & {
      include_admins?: boolean;
    };
  export type ReposRemoveProtectedBranchPullRequestReviewEnforcementParams =
    & Owner
    & Repo
    & Branch
    ;
  export type ReposGetProtectedBranchRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposRemoveProtectedBranchRestrictionsParams =
    & Owner
    & Repo
    & Branch
    ;
  export type ReposGetProtectedBranchTeamRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposReplaceProtectedBranchTeamRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      teams: string[];
    };
  export type ReposAddProtectedBranchTeamRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      teams: string[];
    };
  export type ReposRemoveProtectedBranchTeamRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      teams: string[];
    };
  export type ReposGetProtectedBranchUserRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & Page
    & PerPage
    ;
  export type ReposReplaceProtectedBranchUserRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      users: string[];
    };
  export type ReposAddProtectedBranchUserRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      users: string[];
    };
  export type ReposRemoveProtectedBranchUserRestrictionsParams =
    & Owner
    & Repo
    & Branch
    & {
      users: string[];
    };
  export type ReposGetCollaboratorsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      affiliation?: "outside"|"all"|"direct";
    };
  export type ReposCheckCollaboratorParams =
    & Owner
    & Repo
    & Username
    ;
  export type ReposReviewUserPermissionLevelParams =
    & Owner
    & Repo
    & Username
    ;
  export type ReposAddCollaboratorParams =
    & Owner
    & Repo
    & Username
    & {
      permission?: "pull"|"push"|"admin";
    };
  export type ReposRemoveCollaboratorParams =
    & Owner
    & Repo
    & Username
    ;
  export type ReposGetAllCommitCommentsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetCommitCommentsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      ref: string;
    };
  export type ReposCreateCommitCommentParams =
    & Owner
    & Repo
    & Sha
    & Body
    & {
      path?: string;
      position?: number;
      line?: number;
    };
  export type ReposGetCommitCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposUpdateCommitCommentParams =
    & Owner
    & Repo
    & Id
    & Body
    ;
  export type ReposDeleteCommitCommentParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetCommunityHealthMetricsParams =
    & RepoId
    ;
  export type ReposGetCommitsParams =
    & Owner
    & Repo
    & Since
    & Until
    & Page
    & PerPage
    & {
      sha?: string;
      path?: string;
      author?: string;
    };
  export type ReposGetCommitParams =
    & Owner
    & Repo
    & Sha
    ;
  export type ReposGetShaOfCommitRefParams =
    & Owner
    & Repo
    & Ref
    ;
  export type ReposCompareCommitsParams =
    & Owner
    & Repo
    & Base
    & Head
    ;
  export type ReposGetReadmeParams =
    & Owner
    & Repo
    & {
      ref?: string;
    };
  export type ReposGetContentParams =
    & Owner
    & Repo
    & {
      path: string;
      ref?: string;
    };
  export type ReposCreateFileParams =
    & Owner
    & Repo
    & {
      path: string;
      message: string;
      content: string;
      branch?: string;
      committer?: string;
    };
  export type ReposUpdateFileParams =
    & Owner
    & Repo
    & {
      path: string;
      message: string;
      content: string;
      sha: string;
      branch?: string;
      committer?: string;
    };
  export type ReposDeleteFileParams =
    & Owner
    & Repo
    & {
      path: string;
      message: string;
      sha: string;
      branch?: string;
      committer?: string;
    };
  export type ReposGetArchiveLinkParams =
    & Owner
    & Repo
    & {
      archive_format: "tarball"|"zipball";
      ref?: string;
    };
  export type ReposGetKeysParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetKeyParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposCreateKeyParams =
    & Owner
    & Repo
    & Title
    & Key
    & {
      read_only?: boolean;
    };
  export type ReposDeleteKeyParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetDeploymentsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      sha?: string;
      ref?: string;
      task?: string;
      environment?: string;
    };
  export type ReposCreateDeploymentParams =
    & Owner
    & Repo
    & {
      ref: string;
      task?: string;
      auto_merge?: boolean;
      required_contexts?: string[];
      payload?: string;
      environment?: string;
      description?: string;
      transient_environment?: boolean;
      production_environment?: boolean;
    };
  export type ReposGetDeploymentStatusesParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposCreateDeploymentStatusParams =
    & Owner
    & Repo
    & Id
    & {
      state?: string;
      target_url?: string;
      log_url?: string;
      description?: string;
      environment_url?: string;
      auto_inactive?: boolean;
    };
  export type ReposGetDownloadsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetDownloadParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposDeleteDownloadParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetForksParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      sort?: "newest"|"oldest"|"stargazers";
    };
  export type ReposForkParams =
    & Owner
    & Repo
    & {
      organization?: string;
    };
  export type ReposGetInvitesParams =
    & RepoId
    ;
  export type ReposDeleteInviteParams =
    & RepoId
    & InvitationId
    ;
  export type ReposUpdateInviteParams =
    & RepoId
    & InvitationId
    & {
      permission?: "read"|"write"|"admin";
    };
  export type ReposMergeParams =
    & Owner
    & Repo
    & Base
    & Head
    & {
      commit_message?: string;
    };
  export type ReposGetPagesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposRequestPageBuildParams =
    & Owner
    & Repo
    ;
  export type ReposGetPagesBuildsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetLatestPagesBuildParams =
    & Owner
    & Repo
    ;
  export type ReposGetPagesBuildParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetReleasesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetReleaseParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetLatestReleaseParams =
    & Owner
    & Repo
    ;
  export type ReposGetReleaseByTagParams =
    & Owner
    & Repo
    & {
      tag: string;
    };
  export type ReposCreateReleaseParams =
    & Owner
    & Repo
    & {
      tag_name: string;
      target_commitish?: string;
      name?: string;
      body?: string;
      draft?: boolean;
      prerelease?: boolean;
    };
  export type ReposEditReleaseParams =
    & Owner
    & Repo
    & Id
    & {
      tag_name: string;
      target_commitish?: string;
      name?: string;
      body?: string;
      draft?: boolean;
      prerelease?: boolean;
    };
  export type ReposDeleteReleaseParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetAssetsParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetAssetParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposUploadAssetParams =
    & Owner
    & Repo
    & Id
    & {
      filePath: string;
      name: string;
      label?: string;
    };
  export type ReposEditAssetParams =
    & Owner
    & Repo
    & Id
    & Name
    & {
      label?: string;
    };
  export type ReposDeleteAssetParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposGetStatsContributorsParams =
    & Owner
    & Repo
    ;
  export type ReposGetStatsCommitActivityParams =
    & Owner
    & Repo
    ;
  export type ReposGetStatsCodeFrequencyParams =
    & Owner
    & Repo
    ;
  export type ReposGetStatsParticipationParams =
    & Owner
    & Repo
    ;
  export type ReposGetStatsPunchCardParams =
    & Owner
    & Repo
    ;
  export type ReposCreateStatusParams =
    & Owner
    & Repo
    & Sha
    & {
      state: "pending"|"success"|"error"|"failure";
      target_url?: string;
      description?: string;
      context?: string;
    };
  export type ReposGetStatusesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      ref: string;
    };
  export type ReposGetCombinedStatusParams =
    & Owner
    & Repo
    & Page
    & PerPage
    & {
      ref: string;
    };
  export type ReposGetReferrersParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetPathsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetViewsParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetClonesParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetHooksParams =
    & Owner
    & Repo
    & Page
    & PerPage
    ;
  export type ReposGetHookParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposCreateHookParams =
    & Owner
    & Repo
    & Name
    & {
      config: string;
      events?: string[];
      active?: boolean;
    };
  export type ReposEditHookParams =
    & Owner
    & Repo
    & Id
    & Name
    & {
      config: string;
      events?: string[];
      add_events?: string[];
      remove_events?: string[];
      active?: boolean;
    };
  export type ReposTestHookParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposPingHookParams =
    & Owner
    & Repo
    & Id
    ;
  export type ReposDeleteHookParams =
    & Owner
    & Repo
    & Id
    ;
  export type SearchReposParams =
    & Q
    & Order
    & Page
    & PerPage
    & {
      sort?: "stars"|"forks"|"updated";
    };
  export type SearchCodeParams =
    & Q
    & Order
    & Page
    & PerPage
    & {
      sort?: "indexed";
    };
  export type SearchCommitsParams =
    & Q
    & Order
    & Page
    & PerPage
    & {
      sort?: "author-date"|"committer-date";
    };
  export type SearchIssuesParams =
    & Q
    & Order
    & Page
    & PerPage
    & {
      sort?: "comments"|"created"|"updated";
    };
  export type SearchUsersParams =
    & Q
    & Order
    & Page
    & PerPage
    & {
      sort?: "followers"|"repositories"|"joined";
    };
  export type SearchEmailParams =
    & {
      email: string;
    };
  export type UsersGetForUserParams =
    & Username
    ;
  export type UsersGetByIdParams =
    & Id
    ;
  export type UsersUpdateParams =
    & {
      name?: string;
      email?: string;
      blog?: string;
      company?: string;
      location?: string;
      hireable?: boolean;
      bio?: string;
    };
  export type UsersGetAllParams =
    & {
      since?: number;
    };
  export type UsersGetOrgsParams =
    & Page
    & PerPage
    ;
  export type UsersGetOrgMembershipsParams =
    & {
      state?: "active"|"pending";
    };
  export type UsersGetOrgMembershipParams =
    & Org
    ;
  export type UsersEditOrgMembershipParams =
    & Org
    & {
      state: "active";
    };
  export type UsersGetTeamsParams =
    & Page
    & PerPage
    ;
  export type UsersGetEmailsParams =
    & Page
    & PerPage
    ;
  export type UsersAddEmailsParams =
    & {
      emails: string[];
    };
  export type UsersDeleteEmailsParams =
    & {
      emails: string[];
    };
  export type UsersGetFollowersForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type UsersGetFollowersParams =
    & Page
    & PerPage
    ;
  export type UsersGetFollowingForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type UsersGetFollowingParams =
    & Page
    & PerPage
    ;
  export type UsersCheckFollowingParams =
    & Username
    ;
  export type UsersCheckIfOneFollowersOtherParams =
    & Username
    & {
      target_user: string;
    };
  export type UsersFollowUserParams =
    & Username
    ;
  export type UsersUnfollowUserParams =
    & Username
    ;
  export type UsersGetKeysForUserParams =
    & Username
    & Page
    & PerPage
    ;
  export type UsersGetKeysParams =
    & Page
    & PerPage
    ;
  export type UsersGetKeyParams =
    & Id
    ;
  export type UsersCreateKeyParams =
    & Title
    & Key
    ;
  export type UsersDeleteKeyParams =
    & Id
    ;
  export type UsersGetGpgKeysParams =
    & Page
    & PerPage
    ;
  export type UsersGetGpgKeyParams =
    & Id
    ;
  export type UsersCreateGpgKeyParams =
    & {
      armored_public_key: string;
    };
  export type UsersDeleteGpgKeyParams =
    & Id
    ;
  export type UsersPromoteParams =
    & Username
    ;
  export type UsersDemoteParams =
    & Username
    ;
  export type UsersSuspendParams =
    & Username
    ;
  export type UsersUnsuspendParams =
    & Username
    ;
  export type UsersCheckBlockedUserParams =
    & Username
    ;
  export type UsersBlockUserParams =
    & Username
    ;
  export type UsersUnblockUserParams =
    & Username
    ;
  export type UsersAcceptRepoInviteParams =
    & InvitationId
    ;
  export type UsersDeclineRepoInviteParams =
    & InvitationId
    ;
  export type EnterpriseStatsParams =
    & {
      type: "issues"|"hooks"|"milestones"|"orgs"|"comments"|"pages"|"users"|"gists"|"pulls"|"repos"|"all";
    };
  export type EnterpriseUpdateLdapForUserParams =
    & Username
    & {
      ldap_dn: string;
    };
  export type EnterpriseSyncLdapForUserParams =
    & Username
    ;
  export type EnterpriseUpdateLdapForTeamParams =
    & {
      team_id: number;
      ldap_dn: string;
    };
  export type EnterpriseSyncLdapForTeamParams =
    & {
      team_id: number;
    };
  export type EnterpriseGetPreReceiveEnvironmentParams =
    & Id
    ;
  export type EnterpriseCreatePreReceiveEnvironmentParams =
    & {
      name: string;
      image_url: string;
    };
  export type EnterpriseEditPreReceiveEnvironmentParams =
    & Id
    & {
      name: string;
      image_url: string;
    };
  export type EnterpriseDeletePreReceiveEnvironmentParams =
    & Id
    ;
  export type EnterpriseGetPreReceiveEnvironmentDownloadStatusParams =
    & Id
    ;
  export type EnterpriseTriggerPreReceiveEnvironmentDownloadParams =
    & Id
    ;
  export type EnterpriseGetPreReceiveHookParams =
    & Id
    ;
  export type EnterpriseCreatePreReceiveHookParams =
    & {
      name: string;
      script: string;
      script_repository: string;
      environment: string;
      enforcement?: string;
      allow_downstream_configuration?: boolean;
    };
  export type EnterpriseEditPreReceiveHookParams =
    & Id
    & {
      hook: string;
    };
  export type EnterpriseDeletePreReceiveHookParams =
    & Id
    ;
  export type EnterpriseQueueIndexingJobParams =
    & {
      target: string;
    };
  export type EnterpriseCreateOrgParams =
    & {
      login: string;
      admin: string;
      profile_name?: string;
    };
}

declare class Github {
  constructor(options?: Github.Options);
  authenticate(auth: Github.Auth): void;
  hasNextPage(link: Github.Link): string | undefined;
  hasPreviousPage(link: Github.Link): string | undefined;
  hasLastPage(link: Github.Link): string | undefined;
  hasFirstPage(link: Github.Link): string | undefined;

  getNextPage(link: Github.Link, callback?: Github.Callback): Promise<any>;
  getNextPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<any>;

  getPreviousPage(link: Github.Link, callback?: Github.Callback): Promise<any>;
  getPreviousPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<any>;

  getLastPage(link: Github.Link, callback?: Github.Callback): Promise<any>;
  getLastPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<any>;

  getFirstPage(link: Github.Link, callback?: Github.Callback): Promise<any>;
  getFirstPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<any>;

  authorization: {
    getGrants(params: Github.AuthorizationGetGrantsParams, callback?: Github.Callback): Promise<any>;
    getGrant(params: Github.AuthorizationGetGrantParams, callback?: Github.Callback): Promise<any>;
    deleteGrant(params: Github.AuthorizationDeleteGrantParams, callback?: Github.Callback): Promise<any>;
    getAll(params: Github.AuthorizationGetAllParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.AuthorizationGetParams, callback?: Github.Callback): Promise<any>;
    create(params: Github.AuthorizationCreateParams, callback?: Github.Callback): Promise<any>;
    getOrCreateAuthorizationForApp(params: Github.AuthorizationGetOrCreateAuthorizationForAppParams, callback?: Github.Callback): Promise<any>;
    getOrCreateAuthorizationForAppAndFingerprint(params: Github.AuthorizationGetOrCreateAuthorizationForAppAndFingerprintParams, callback?: Github.Callback): Promise<any>;
    update(params: Github.AuthorizationUpdateParams, callback?: Github.Callback): Promise<any>;
    delete(params: Github.AuthorizationDeleteParams, callback?: Github.Callback): Promise<any>;
    check(params: Github.AuthorizationCheckParams, callback?: Github.Callback): Promise<any>;
    reset(params: Github.AuthorizationResetParams, callback?: Github.Callback): Promise<any>;
    revoke(params: Github.AuthorizationRevokeParams, callback?: Github.Callback): Promise<any>;
  };
  activity: {
    getEvents(params: Github.ActivityGetEventsParams, callback?: Github.Callback): Promise<any>;
    getEventsForRepo(params: Github.ActivityGetEventsForRepoParams, callback?: Github.Callback): Promise<any>;
    getEventsForRepoIssues(params: Github.ActivityGetEventsForRepoIssuesParams, callback?: Github.Callback): Promise<any>;
    getEventsForRepoNetwork(params: Github.ActivityGetEventsForRepoNetworkParams, callback?: Github.Callback): Promise<any>;
    getEventsForOrg(params: Github.ActivityGetEventsForOrgParams, callback?: Github.Callback): Promise<any>;
    getEventsReceived(params: Github.ActivityGetEventsReceivedParams, callback?: Github.Callback): Promise<any>;
    getEventsReceivedPublic(params: Github.ActivityGetEventsReceivedPublicParams, callback?: Github.Callback): Promise<any>;
    getEventsForUser(params: Github.ActivityGetEventsForUserParams, callback?: Github.Callback): Promise<any>;
    getEventsForUserPublic(params: Github.ActivityGetEventsForUserPublicParams, callback?: Github.Callback): Promise<any>;
    getEventsForUserOrg(params: Github.ActivityGetEventsForUserOrgParams, callback?: Github.Callback): Promise<any>;
    getFeeds(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getNotifications(params: Github.ActivityGetNotificationsParams, callback?: Github.Callback): Promise<any>;
    getNotificationsForUser(params: Github.ActivityGetNotificationsForUserParams, callback?: Github.Callback): Promise<any>;
    markNotificationsAsRead(params: Github.ActivityMarkNotificationsAsReadParams, callback?: Github.Callback): Promise<any>;
    markNotificationsAsReadForRepo(params: Github.ActivityMarkNotificationsAsReadForRepoParams, callback?: Github.Callback): Promise<any>;
    getNotificationThread(params: Github.ActivityGetNotificationThreadParams, callback?: Github.Callback): Promise<any>;
    markNotificationThreadAsRead(params: Github.ActivityMarkNotificationThreadAsReadParams, callback?: Github.Callback): Promise<any>;
    checkNotificationThreadSubscription(params: Github.ActivityCheckNotificationThreadSubscriptionParams, callback?: Github.Callback): Promise<any>;
    setNotificationThreadSubscription(params: Github.ActivitySetNotificationThreadSubscriptionParams, callback?: Github.Callback): Promise<any>;
    deleteNotificationThreadSubscription(params: Github.ActivityDeleteNotificationThreadSubscriptionParams, callback?: Github.Callback): Promise<any>;
    getStargazersForRepo(params: Github.ActivityGetStargazersForRepoParams, callback?: Github.Callback): Promise<any>;
    getStarredReposForUser(params: Github.ActivityGetStarredReposForUserParams, callback?: Github.Callback): Promise<any>;
    getStarredRepos(params: Github.ActivityGetStarredReposParams, callback?: Github.Callback): Promise<any>;
    checkStarringRepo(params: Github.ActivityCheckStarringRepoParams, callback?: Github.Callback): Promise<any>;
    starRepo(params: Github.ActivityStarRepoParams, callback?: Github.Callback): Promise<any>;
    unstarRepo(params: Github.ActivityUnstarRepoParams, callback?: Github.Callback): Promise<any>;
    getWatchersForRepo(params: Github.ActivityGetWatchersForRepoParams, callback?: Github.Callback): Promise<any>;
    getWatchedReposForUser(params: Github.ActivityGetWatchedReposForUserParams, callback?: Github.Callback): Promise<any>;
    getWatchedRepos(params: Github.ActivityGetWatchedReposParams, callback?: Github.Callback): Promise<any>;
    getRepoSubscription(params: Github.ActivityGetRepoSubscriptionParams, callback?: Github.Callback): Promise<any>;
    setRepoSubscription(params: Github.ActivitySetRepoSubscriptionParams, callback?: Github.Callback): Promise<any>;
    unwatchRepo(params: Github.ActivityUnwatchRepoParams, callback?: Github.Callback): Promise<any>;
  };
  gists: {
    getForUser(params: Github.GistsGetForUserParams, callback?: Github.Callback): Promise<any>;
    getAll(params: Github.GistsGetAllParams, callback?: Github.Callback): Promise<any>;
    getPublic(params: Github.GistsGetPublicParams, callback?: Github.Callback): Promise<any>;
    getStarred(params: Github.GistsGetStarredParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.GistsGetParams, callback?: Github.Callback): Promise<any>;
    getRevision(params: Github.GistsGetRevisionParams, callback?: Github.Callback): Promise<any>;
    create(params: Github.GistsCreateParams, callback?: Github.Callback): Promise<any>;
    edit(params: Github.GistsEditParams, callback?: Github.Callback): Promise<any>;
    getCommits(params: Github.GistsGetCommitsParams, callback?: Github.Callback): Promise<any>;
    star(params: Github.GistsStarParams, callback?: Github.Callback): Promise<any>;
    unstar(params: Github.GistsUnstarParams, callback?: Github.Callback): Promise<any>;
    checkStar(params: Github.GistsCheckStarParams, callback?: Github.Callback): Promise<any>;
    fork(params: Github.GistsForkParams, callback?: Github.Callback): Promise<any>;
    getForks(params: Github.GistsGetForksParams, callback?: Github.Callback): Promise<any>;
    delete(params: Github.GistsDeleteParams, callback?: Github.Callback): Promise<any>;
    getComments(params: Github.GistsGetCommentsParams, callback?: Github.Callback): Promise<any>;
    getComment(params: Github.GistsGetCommentParams, callback?: Github.Callback): Promise<any>;
    createComment(params: Github.GistsCreateCommentParams, callback?: Github.Callback): Promise<any>;
    editComment(params: Github.GistsEditCommentParams, callback?: Github.Callback): Promise<any>;
    deleteComment(params: Github.GistsDeleteCommentParams, callback?: Github.Callback): Promise<any>;
  };
  gitdata: {
    getBlob(params: Github.GitdataGetBlobParams, callback?: Github.Callback): Promise<any>;
    createBlob(params: Github.GitdataCreateBlobParams, callback?: Github.Callback): Promise<any>;
    getCommit(params: Github.GitdataGetCommitParams, callback?: Github.Callback): Promise<any>;
    createCommit(params: Github.GitdataCreateCommitParams, callback?: Github.Callback): Promise<any>;
    getCommitSignatureVerification(params: Github.GitdataGetCommitSignatureVerificationParams, callback?: Github.Callback): Promise<any>;
    getReference(params: Github.GitdataGetReferenceParams, callback?: Github.Callback): Promise<any>;
    getReferences(params: Github.GitdataGetReferencesParams, callback?: Github.Callback): Promise<any>;
    getTags(params: Github.GitdataGetTagsParams, callback?: Github.Callback): Promise<any>;
    createReference(params: Github.GitdataCreateReferenceParams, callback?: Github.Callback): Promise<any>;
    updateReference(params: Github.GitdataUpdateReferenceParams, callback?: Github.Callback): Promise<any>;
    deleteReference(params: Github.GitdataDeleteReferenceParams, callback?: Github.Callback): Promise<any>;
    getTag(params: Github.GitdataGetTagParams, callback?: Github.Callback): Promise<any>;
    createTag(params: Github.GitdataCreateTagParams, callback?: Github.Callback): Promise<any>;
    getTagSignatureVerification(params: Github.GitdataGetTagSignatureVerificationParams, callback?: Github.Callback): Promise<any>;
    getTree(params: Github.GitdataGetTreeParams, callback?: Github.Callback): Promise<any>;
    createTree(params: Github.GitdataCreateTreeParams, callback?: Github.Callback): Promise<any>;
  };
  integrations: {
    getInstallations(params: Github.IntegrationsGetInstallationsParams, callback?: Github.Callback): Promise<any>;
    createInstallationToken(params: Github.IntegrationsCreateInstallationTokenParams, callback?: Github.Callback): Promise<any>;
    getUserIdentity(params: Github.IntegrationsGetUserIdentityParams, callback?: Github.Callback): Promise<any>;
    getInstallationRepositories(params: Github.IntegrationsGetInstallationRepositoriesParams, callback?: Github.Callback): Promise<any>;
    addRepoToInstallation(params: Github.IntegrationsAddRepoToInstallationParams, callback?: Github.Callback): Promise<any>;
    removeRepoFromInstallation(params: Github.IntegrationsRemoveRepoFromInstallationParams, callback?: Github.Callback): Promise<any>;
  };
  issues: {
    getAll(params: Github.IssuesGetAllParams, callback?: Github.Callback): Promise<any>;
    getForUser(params: Github.IssuesGetForUserParams, callback?: Github.Callback): Promise<any>;
    getForOrg(params: Github.IssuesGetForOrgParams, callback?: Github.Callback): Promise<any>;
    getForRepo(params: Github.IssuesGetForRepoParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.IssuesGetParams, callback?: Github.Callback): Promise<any>;
    create(params: Github.IssuesCreateParams, callback?: Github.Callback): Promise<any>;
    edit(params: Github.IssuesEditParams, callback?: Github.Callback): Promise<any>;
    lock(params: Github.IssuesLockParams, callback?: Github.Callback): Promise<any>;
    unlock(params: Github.IssuesUnlockParams, callback?: Github.Callback): Promise<any>;
    getAssignees(params: Github.IssuesGetAssigneesParams, callback?: Github.Callback): Promise<any>;
    checkAssignee(params: Github.IssuesCheckAssigneeParams, callback?: Github.Callback): Promise<any>;
    addAssigneesToIssue(params: Github.IssuesAddAssigneesToIssueParams, callback?: Github.Callback): Promise<any>;
    removeAssigneesFromIssue(params: Github.IssuesRemoveAssigneesFromIssueParams, callback?: Github.Callback): Promise<any>;
    getComments(params: Github.IssuesGetCommentsParams, callback?: Github.Callback): Promise<any>;
    getCommentsForRepo(params: Github.IssuesGetCommentsForRepoParams, callback?: Github.Callback): Promise<any>;
    getComment(params: Github.IssuesGetCommentParams, callback?: Github.Callback): Promise<any>;
    createComment(params: Github.IssuesCreateCommentParams, callback?: Github.Callback): Promise<any>;
    editComment(params: Github.IssuesEditCommentParams, callback?: Github.Callback): Promise<any>;
    deleteComment(params: Github.IssuesDeleteCommentParams, callback?: Github.Callback): Promise<any>;
    getEvents(params: Github.IssuesGetEventsParams, callback?: Github.Callback): Promise<any>;
    getEventsForRepo(params: Github.IssuesGetEventsForRepoParams, callback?: Github.Callback): Promise<any>;
    getEvent(params: Github.IssuesGetEventParams, callback?: Github.Callback): Promise<any>;
    getLabels(params: Github.IssuesGetLabelsParams, callback?: Github.Callback): Promise<any>;
    getLabel(params: Github.IssuesGetLabelParams, callback?: Github.Callback): Promise<any>;
    createLabel(params: Github.IssuesCreateLabelParams, callback?: Github.Callback): Promise<any>;
    updateLabel(params: Github.IssuesUpdateLabelParams, callback?: Github.Callback): Promise<any>;
    deleteLabel(params: Github.IssuesDeleteLabelParams, callback?: Github.Callback): Promise<any>;
    getIssueLabels(params: Github.IssuesGetIssueLabelsParams, callback?: Github.Callback): Promise<any>;
    addLabels(params: Github.IssuesAddLabelsParams, callback?: Github.Callback): Promise<any>;
    removeLabel(params: Github.IssuesRemoveLabelParams, callback?: Github.Callback): Promise<any>;
    replaceAllLabels(params: Github.IssuesReplaceAllLabelsParams, callback?: Github.Callback): Promise<any>;
    removeAllLabels(params: Github.IssuesRemoveAllLabelsParams, callback?: Github.Callback): Promise<any>;
    getMilestoneLabels(params: Github.IssuesGetMilestoneLabelsParams, callback?: Github.Callback): Promise<any>;
    getMilestones(params: Github.IssuesGetMilestonesParams, callback?: Github.Callback): Promise<any>;
    getMilestone(params: Github.IssuesGetMilestoneParams, callback?: Github.Callback): Promise<any>;
    createMilestone(params: Github.IssuesCreateMilestoneParams, callback?: Github.Callback): Promise<any>;
    updateMilestone(params: Github.IssuesUpdateMilestoneParams, callback?: Github.Callback): Promise<any>;
    deleteMilestone(params: Github.IssuesDeleteMilestoneParams, callback?: Github.Callback): Promise<any>;
    getEventsTimeline(params: Github.IssuesGetEventsTimelineParams, callback?: Github.Callback): Promise<any>;
  };
  migrations: {
    startMigration(params: Github.MigrationsStartMigrationParams, callback?: Github.Callback): Promise<any>;
    getMigrations(params: Github.MigrationsGetMigrationsParams, callback?: Github.Callback): Promise<any>;
    getMigrationStatus(params: Github.MigrationsGetMigrationStatusParams, callback?: Github.Callback): Promise<any>;
    getMigrationArchiveLink(params: Github.MigrationsGetMigrationArchiveLinkParams, callback?: Github.Callback): Promise<any>;
    deleteMigrationArchive(params: Github.MigrationsDeleteMigrationArchiveParams, callback?: Github.Callback): Promise<any>;
    unlockRepoLockedForMigration(params: Github.MigrationsUnlockRepoLockedForMigrationParams, callback?: Github.Callback): Promise<any>;
    startImport(params: Github.MigrationsStartImportParams, callback?: Github.Callback): Promise<any>;
    getImportProgress(params: Github.MigrationsGetImportProgressParams, callback?: Github.Callback): Promise<any>;
    updateImport(params: Github.MigrationsUpdateImportParams, callback?: Github.Callback): Promise<any>;
    getImportCommitAuthors(params: Github.MigrationsGetImportCommitAuthorsParams, callback?: Github.Callback): Promise<any>;
    mapImportCommitAuthor(params: Github.MigrationsMapImportCommitAuthorParams, callback?: Github.Callback): Promise<any>;
    setImportLfsPreference(params: Github.MigrationsSetImportLfsPreferenceParams, callback?: Github.Callback): Promise<any>;
    getLargeImportFiles(params: Github.MigrationsGetLargeImportFilesParams, callback?: Github.Callback): Promise<any>;
    cancelImport(params: Github.MigrationsCancelImportParams, callback?: Github.Callback): Promise<any>;
  };
  misc: {
    getEmojis(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getGitignoreTemplates(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getGitignoreTemplate(params: Github.MiscGetGitignoreTemplateParams, callback?: Github.Callback): Promise<any>;
    getLicenses(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getLicense(params: Github.MiscGetLicenseParams, callback?: Github.Callback): Promise<any>;
    getRepoLicense(params: Github.MiscGetRepoLicenseParams, callback?: Github.Callback): Promise<any>;
    renderMarkdown(params: Github.MiscRenderMarkdownParams, callback?: Github.Callback): Promise<any>;
    renderMarkdownRaw(params: Github.MiscRenderMarkdownRawParams, callback?: Github.Callback): Promise<any>;
    getMeta(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getRateLimit(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
  };
  orgs: {
    getAll(params: Github.OrgsGetAllParams, callback?: Github.Callback): Promise<any>;
    getForUser(params: Github.OrgsGetForUserParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.OrgsGetParams, callback?: Github.Callback): Promise<any>;
    update(params: Github.OrgsUpdateParams, callback?: Github.Callback): Promise<any>;
    getMembers(params: Github.OrgsGetMembersParams, callback?: Github.Callback): Promise<any>;
    checkMembership(params: Github.OrgsCheckMembershipParams, callback?: Github.Callback): Promise<any>;
    removeMember(params: Github.OrgsRemoveMemberParams, callback?: Github.Callback): Promise<any>;
    getPublicMembers(params: Github.OrgsGetPublicMembersParams, callback?: Github.Callback): Promise<any>;
    checkPublicMembership(params: Github.OrgsCheckPublicMembershipParams, callback?: Github.Callback): Promise<any>;
    publicizeMembership(params: Github.OrgsPublicizeMembershipParams, callback?: Github.Callback): Promise<any>;
    concealMembership(params: Github.OrgsConcealMembershipParams, callback?: Github.Callback): Promise<any>;
    getOrgMembership(params: Github.OrgsGetOrgMembershipParams, callback?: Github.Callback): Promise<any>;
    addOrgMembership(params: Github.OrgsAddOrgMembershipParams, callback?: Github.Callback): Promise<any>;
    removeOrgMembership(params: Github.OrgsRemoveOrgMembershipParams, callback?: Github.Callback): Promise<any>;
    getPendingOrgInvites(params: Github.OrgsGetPendingOrgInvitesParams, callback?: Github.Callback): Promise<any>;
    getOutsideCollaborators(params: Github.OrgsGetOutsideCollaboratorsParams, callback?: Github.Callback): Promise<any>;
    removeOutsideCollaborator(params: Github.OrgsRemoveOutsideCollaboratorParams, callback?: Github.Callback): Promise<any>;
    convertMemberToOutsideCollaborator(params: Github.OrgsConvertMemberToOutsideCollaboratorParams, callback?: Github.Callback): Promise<any>;
    getTeams(params: Github.OrgsGetTeamsParams, callback?: Github.Callback): Promise<any>;
    getTeam(params: Github.OrgsGetTeamParams, callback?: Github.Callback): Promise<any>;
    createTeam(params: Github.OrgsCreateTeamParams, callback?: Github.Callback): Promise<any>;
    editTeam(params: Github.OrgsEditTeamParams, callback?: Github.Callback): Promise<any>;
    deleteTeam(params: Github.OrgsDeleteTeamParams, callback?: Github.Callback): Promise<any>;
    getTeamMembers(params: Github.OrgsGetTeamMembersParams, callback?: Github.Callback): Promise<any>;
    getTeamMembership(params: Github.OrgsGetTeamMembershipParams, callback?: Github.Callback): Promise<any>;
    addTeamMembership(params: Github.OrgsAddTeamMembershipParams, callback?: Github.Callback): Promise<any>;
    removeTeamMembership(params: Github.OrgsRemoveTeamMembershipParams, callback?: Github.Callback): Promise<any>;
    getTeamRepos(params: Github.OrgsGetTeamReposParams, callback?: Github.Callback): Promise<any>;
    getPendingTeamInvites(params: Github.OrgsGetPendingTeamInvitesParams, callback?: Github.Callback): Promise<any>;
    checkTeamRepo(params: Github.OrgsCheckTeamRepoParams, callback?: Github.Callback): Promise<any>;
    addTeamRepo(params: Github.OrgsAddTeamRepoParams, callback?: Github.Callback): Promise<any>;
    deleteTeamRepo(params: Github.OrgsDeleteTeamRepoParams, callback?: Github.Callback): Promise<any>;
    getHooks(params: Github.OrgsGetHooksParams, callback?: Github.Callback): Promise<any>;
    getHook(params: Github.OrgsGetHookParams, callback?: Github.Callback): Promise<any>;
    createHook(params: Github.OrgsCreateHookParams, callback?: Github.Callback): Promise<any>;
    editHook(params: Github.OrgsEditHookParams, callback?: Github.Callback): Promise<any>;
    pingHook(params: Github.OrgsPingHookParams, callback?: Github.Callback): Promise<any>;
    deleteHook(params: Github.OrgsDeleteHookParams, callback?: Github.Callback): Promise<any>;
    getBlockedUsers(params: Github.OrgsGetBlockedUsersParams, callback?: Github.Callback): Promise<any>;
    checkBlockedUser(params: Github.OrgsCheckBlockedUserParams, callback?: Github.Callback): Promise<any>;
    blockUser(params: Github.OrgsBlockUserParams, callback?: Github.Callback): Promise<any>;
    unblockUser(params: Github.OrgsUnblockUserParams, callback?: Github.Callback): Promise<any>;
  };
  projects: {
    getRepoProjects(params: Github.ProjectsGetRepoProjectsParams, callback?: Github.Callback): Promise<any>;
    getOrgProjects(params: Github.ProjectsGetOrgProjectsParams, callback?: Github.Callback): Promise<any>;
    getProject(params: Github.ProjectsGetProjectParams, callback?: Github.Callback): Promise<any>;
    createRepoProject(params: Github.ProjectsCreateRepoProjectParams, callback?: Github.Callback): Promise<any>;
    createOrgProject(params: Github.ProjectsCreateOrgProjectParams, callback?: Github.Callback): Promise<any>;
    updateProject(params: Github.ProjectsUpdateProjectParams, callback?: Github.Callback): Promise<any>;
    deleteProject(params: Github.ProjectsDeleteProjectParams, callback?: Github.Callback): Promise<any>;
    getProjectCards(params: Github.ProjectsGetProjectCardsParams, callback?: Github.Callback): Promise<any>;
    getProjectCard(params: Github.ProjectsGetProjectCardParams, callback?: Github.Callback): Promise<any>;
    createProjectCard(params: Github.ProjectsCreateProjectCardParams, callback?: Github.Callback): Promise<any>;
    updateProjectCard(params: Github.ProjectsUpdateProjectCardParams, callback?: Github.Callback): Promise<any>;
    deleteProjectCard(params: Github.ProjectsDeleteProjectCardParams, callback?: Github.Callback): Promise<any>;
    moveProjectCard(params: Github.ProjectsMoveProjectCardParams, callback?: Github.Callback): Promise<any>;
    getProjectColumns(params: Github.ProjectsGetProjectColumnsParams, callback?: Github.Callback): Promise<any>;
    getProjectColumn(params: Github.ProjectsGetProjectColumnParams, callback?: Github.Callback): Promise<any>;
    createProjectColumn(params: Github.ProjectsCreateProjectColumnParams, callback?: Github.Callback): Promise<any>;
    updateProjectColumn(params: Github.ProjectsUpdateProjectColumnParams, callback?: Github.Callback): Promise<any>;
    deleteProjectColumn(params: Github.ProjectsDeleteProjectColumnParams, callback?: Github.Callback): Promise<any>;
    moveProjectColumn(params: Github.ProjectsMoveProjectColumnParams, callback?: Github.Callback): Promise<any>;
  };
  pullRequests: {
    getAll(params: Github.PullRequestsGetAllParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.PullRequestsGetParams, callback?: Github.Callback): Promise<any>;
    create(params: Github.PullRequestsCreateParams, callback?: Github.Callback): Promise<any>;
    createFromIssue(params: Github.PullRequestsCreateFromIssueParams, callback?: Github.Callback): Promise<any>;
    update(params: Github.PullRequestsUpdateParams, callback?: Github.Callback): Promise<any>;
    getCommits(params: Github.PullRequestsGetCommitsParams, callback?: Github.Callback): Promise<any>;
    getFiles(params: Github.PullRequestsGetFilesParams, callback?: Github.Callback): Promise<any>;
    checkMerged(params: Github.PullRequestsCheckMergedParams, callback?: Github.Callback): Promise<any>;
    merge(params: Github.PullRequestsMergeParams, callback?: Github.Callback): Promise<any>;
    getReviews(params: Github.PullRequestsGetReviewsParams, callback?: Github.Callback): Promise<any>;
    getReview(params: Github.PullRequestsGetReviewParams, callback?: Github.Callback): Promise<any>;
    getReviewComments(params: Github.PullRequestsGetReviewCommentsParams, callback?: Github.Callback): Promise<any>;
    createReview(params: Github.PullRequestsCreateReviewParams, callback?: Github.Callback): Promise<any>;
    submitReview(params: Github.PullRequestsSubmitReviewParams, callback?: Github.Callback): Promise<any>;
    dismissReview(params: Github.PullRequestsDismissReviewParams, callback?: Github.Callback): Promise<any>;
    getComments(params: Github.PullRequestsGetCommentsParams, callback?: Github.Callback): Promise<any>;
    getCommentsForRepo(params: Github.PullRequestsGetCommentsForRepoParams, callback?: Github.Callback): Promise<any>;
    getComment(params: Github.PullRequestsGetCommentParams, callback?: Github.Callback): Promise<any>;
    createComment(params: Github.PullRequestsCreateCommentParams, callback?: Github.Callback): Promise<any>;
    createCommentReply(params: Github.PullRequestsCreateCommentReplyParams, callback?: Github.Callback): Promise<any>;
    editComment(params: Github.PullRequestsEditCommentParams, callback?: Github.Callback): Promise<any>;
    deleteComment(params: Github.PullRequestsDeleteCommentParams, callback?: Github.Callback): Promise<any>;
    getReviewRequests(params: Github.PullRequestsGetReviewRequestsParams, callback?: Github.Callback): Promise<any>;
    createReviewRequest(params: Github.PullRequestsCreateReviewRequestParams, callback?: Github.Callback): Promise<any>;
    deleteReviewRequest(params: Github.PullRequestsDeleteReviewRequestParams, callback?: Github.Callback): Promise<any>;
  };
  reactions: {
    getForCommitComment(params: Github.ReactionsGetForCommitCommentParams, callback?: Github.Callback): Promise<any>;
    createForCommitComment(params: Github.ReactionsCreateForCommitCommentParams, callback?: Github.Callback): Promise<any>;
    getForIssue(params: Github.ReactionsGetForIssueParams, callback?: Github.Callback): Promise<any>;
    createForIssue(params: Github.ReactionsCreateForIssueParams, callback?: Github.Callback): Promise<any>;
    getForIssueComment(params: Github.ReactionsGetForIssueCommentParams, callback?: Github.Callback): Promise<any>;
    createForIssueComment(params: Github.ReactionsCreateForIssueCommentParams, callback?: Github.Callback): Promise<any>;
    getForPullRequestReviewComment(params: Github.ReactionsGetForPullRequestReviewCommentParams, callback?: Github.Callback): Promise<any>;
    createForPullRequestReviewComment(params: Github.ReactionsCreateForPullRequestReviewCommentParams, callback?: Github.Callback): Promise<any>;
    delete(params: Github.ReactionsDeleteParams, callback?: Github.Callback): Promise<any>;
  };
  repos: {
    getAll(params: Github.ReposGetAllParams, callback?: Github.Callback): Promise<any>;
    getForUser(params: Github.ReposGetForUserParams, callback?: Github.Callback): Promise<any>;
    getForOrg(params: Github.ReposGetForOrgParams, callback?: Github.Callback): Promise<any>;
    getPublic(params: Github.ReposGetPublicParams, callback?: Github.Callback): Promise<any>;
    getById(params: Github.ReposGetByIdParams, callback?: Github.Callback): Promise<any>;
    create(params: Github.ReposCreateParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.ReposGetParams, callback?: Github.Callback): Promise<any>;
    createForOrg(params: Github.ReposCreateForOrgParams, callback?: Github.Callback): Promise<any>;
    edit(params: Github.ReposEditParams, callback?: Github.Callback): Promise<any>;
    getContributors(params: Github.ReposGetContributorsParams, callback?: Github.Callback): Promise<any>;
    getLanguages(params: Github.ReposGetLanguagesParams, callback?: Github.Callback): Promise<any>;
    getTeams(params: Github.ReposGetTeamsParams, callback?: Github.Callback): Promise<any>;
    getTags(params: Github.ReposGetTagsParams, callback?: Github.Callback): Promise<any>;
    delete(params: Github.ReposDeleteParams, callback?: Github.Callback): Promise<any>;
    getBranches(params: Github.ReposGetBranchesParams, callback?: Github.Callback): Promise<any>;
    getBranch(params: Github.ReposGetBranchParams, callback?: Github.Callback): Promise<any>;
    getBranchProtection(params: Github.ReposGetBranchProtectionParams, callback?: Github.Callback): Promise<any>;
    updateBranchProtection(params: Github.ReposUpdateBranchProtectionParams, callback?: Github.Callback): Promise<any>;
    removeBranchProtection(params: Github.ReposRemoveBranchProtectionParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchRequiredStatusChecks(params: Github.ReposGetProtectedBranchRequiredStatusChecksParams, callback?: Github.Callback): Promise<any>;
    updateProtectedBranchRequiredStatusChecks(params: Github.ReposUpdateProtectedBranchRequiredStatusChecksParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchRequiredStatusChecks(params: Github.ReposRemoveProtectedBranchRequiredStatusChecksParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchRequiredStatusChecksContexts(params: Github.ReposGetProtectedBranchRequiredStatusChecksContextsParams, callback?: Github.Callback): Promise<any>;
    replaceProtectedBranchRequiredStatusChecksContexts(params: Github.ReposReplaceProtectedBranchRequiredStatusChecksContextsParams, callback?: Github.Callback): Promise<any>;
    addProtectedBranchRequiredStatusChecksContexts(params: Github.ReposAddProtectedBranchRequiredStatusChecksContextsParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchRequiredStatusChecksContexts(params: Github.ReposRemoveProtectedBranchRequiredStatusChecksContextsParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchPullRequestReviewEnforcement(params: Github.ReposGetProtectedBranchPullRequestReviewEnforcementParams, callback?: Github.Callback): Promise<any>;
    updateProtectedBranchPullRequestReviewEnforcement(params: Github.ReposUpdateProtectedBranchPullRequestReviewEnforcementParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchPullRequestReviewEnforcement(params: Github.ReposRemoveProtectedBranchPullRequestReviewEnforcementParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchRestrictions(params: Github.ReposGetProtectedBranchRestrictionsParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchRestrictions(params: Github.ReposRemoveProtectedBranchRestrictionsParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchTeamRestrictions(params: Github.ReposGetProtectedBranchTeamRestrictionsParams, callback?: Github.Callback): Promise<any>;
    replaceProtectedBranchTeamRestrictions(params: Github.ReposReplaceProtectedBranchTeamRestrictionsParams, callback?: Github.Callback): Promise<any>;
    addProtectedBranchTeamRestrictions(params: Github.ReposAddProtectedBranchTeamRestrictionsParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchTeamRestrictions(params: Github.ReposRemoveProtectedBranchTeamRestrictionsParams, callback?: Github.Callback): Promise<any>;
    getProtectedBranchUserRestrictions(params: Github.ReposGetProtectedBranchUserRestrictionsParams, callback?: Github.Callback): Promise<any>;
    replaceProtectedBranchUserRestrictions(params: Github.ReposReplaceProtectedBranchUserRestrictionsParams, callback?: Github.Callback): Promise<any>;
    addProtectedBranchUserRestrictions(params: Github.ReposAddProtectedBranchUserRestrictionsParams, callback?: Github.Callback): Promise<any>;
    removeProtectedBranchUserRestrictions(params: Github.ReposRemoveProtectedBranchUserRestrictionsParams, callback?: Github.Callback): Promise<any>;
    getCollaborators(params: Github.ReposGetCollaboratorsParams, callback?: Github.Callback): Promise<any>;
    checkCollaborator(params: Github.ReposCheckCollaboratorParams, callback?: Github.Callback): Promise<any>;
    reviewUserPermissionLevel(params: Github.ReposReviewUserPermissionLevelParams, callback?: Github.Callback): Promise<any>;
    addCollaborator(params: Github.ReposAddCollaboratorParams, callback?: Github.Callback): Promise<any>;
    removeCollaborator(params: Github.ReposRemoveCollaboratorParams, callback?: Github.Callback): Promise<any>;
    getAllCommitComments(params: Github.ReposGetAllCommitCommentsParams, callback?: Github.Callback): Promise<any>;
    getCommitComments(params: Github.ReposGetCommitCommentsParams, callback?: Github.Callback): Promise<any>;
    createCommitComment(params: Github.ReposCreateCommitCommentParams, callback?: Github.Callback): Promise<any>;
    getCommitComment(params: Github.ReposGetCommitCommentParams, callback?: Github.Callback): Promise<any>;
    updateCommitComment(params: Github.ReposUpdateCommitCommentParams, callback?: Github.Callback): Promise<any>;
    deleteCommitComment(params: Github.ReposDeleteCommitCommentParams, callback?: Github.Callback): Promise<any>;
    getCommunityHealthMetrics(params: Github.ReposGetCommunityHealthMetricsParams, callback?: Github.Callback): Promise<any>;
    getCommits(params: Github.ReposGetCommitsParams, callback?: Github.Callback): Promise<any>;
    getCommit(params: Github.ReposGetCommitParams, callback?: Github.Callback): Promise<any>;
    getShaOfCommitRef(params: Github.ReposGetShaOfCommitRefParams, callback?: Github.Callback): Promise<any>;
    compareCommits(params: Github.ReposCompareCommitsParams, callback?: Github.Callback): Promise<any>;
    getReadme(params: Github.ReposGetReadmeParams, callback?: Github.Callback): Promise<any>;
    getContent(params: Github.ReposGetContentParams, callback?: Github.Callback): Promise<any>;
    createFile(params: Github.ReposCreateFileParams, callback?: Github.Callback): Promise<any>;
    updateFile(params: Github.ReposUpdateFileParams, callback?: Github.Callback): Promise<any>;
    deleteFile(params: Github.ReposDeleteFileParams, callback?: Github.Callback): Promise<any>;
    getArchiveLink(params: Github.ReposGetArchiveLinkParams, callback?: Github.Callback): Promise<any>;
    getKeys(params: Github.ReposGetKeysParams, callback?: Github.Callback): Promise<any>;
    getKey(params: Github.ReposGetKeyParams, callback?: Github.Callback): Promise<any>;
    createKey(params: Github.ReposCreateKeyParams, callback?: Github.Callback): Promise<any>;
    deleteKey(params: Github.ReposDeleteKeyParams, callback?: Github.Callback): Promise<any>;
    getDeployments(params: Github.ReposGetDeploymentsParams, callback?: Github.Callback): Promise<any>;
    createDeployment(params: Github.ReposCreateDeploymentParams, callback?: Github.Callback): Promise<any>;
    getDeploymentStatuses(params: Github.ReposGetDeploymentStatusesParams, callback?: Github.Callback): Promise<any>;
    createDeploymentStatus(params: Github.ReposCreateDeploymentStatusParams, callback?: Github.Callback): Promise<any>;
    getDownloads(params: Github.ReposGetDownloadsParams, callback?: Github.Callback): Promise<any>;
    getDownload(params: Github.ReposGetDownloadParams, callback?: Github.Callback): Promise<any>;
    deleteDownload(params: Github.ReposDeleteDownloadParams, callback?: Github.Callback): Promise<any>;
    getForks(params: Github.ReposGetForksParams, callback?: Github.Callback): Promise<any>;
    fork(params: Github.ReposForkParams, callback?: Github.Callback): Promise<any>;
    getInvites(params: Github.ReposGetInvitesParams, callback?: Github.Callback): Promise<any>;
    deleteInvite(params: Github.ReposDeleteInviteParams, callback?: Github.Callback): Promise<any>;
    updateInvite(params: Github.ReposUpdateInviteParams, callback?: Github.Callback): Promise<any>;
    merge(params: Github.ReposMergeParams, callback?: Github.Callback): Promise<any>;
    getPages(params: Github.ReposGetPagesParams, callback?: Github.Callback): Promise<any>;
    requestPageBuild(params: Github.ReposRequestPageBuildParams, callback?: Github.Callback): Promise<any>;
    getPagesBuilds(params: Github.ReposGetPagesBuildsParams, callback?: Github.Callback): Promise<any>;
    getLatestPagesBuild(params: Github.ReposGetLatestPagesBuildParams, callback?: Github.Callback): Promise<any>;
    getPagesBuild(params: Github.ReposGetPagesBuildParams, callback?: Github.Callback): Promise<any>;
    getReleases(params: Github.ReposGetReleasesParams, callback?: Github.Callback): Promise<any>;
    getRelease(params: Github.ReposGetReleaseParams, callback?: Github.Callback): Promise<any>;
    getLatestRelease(params: Github.ReposGetLatestReleaseParams, callback?: Github.Callback): Promise<any>;
    getReleaseByTag(params: Github.ReposGetReleaseByTagParams, callback?: Github.Callback): Promise<any>;
    createRelease(params: Github.ReposCreateReleaseParams, callback?: Github.Callback): Promise<any>;
    editRelease(params: Github.ReposEditReleaseParams, callback?: Github.Callback): Promise<any>;
    deleteRelease(params: Github.ReposDeleteReleaseParams, callback?: Github.Callback): Promise<any>;
    getAssets(params: Github.ReposGetAssetsParams, callback?: Github.Callback): Promise<any>;
    getAsset(params: Github.ReposGetAssetParams, callback?: Github.Callback): Promise<any>;
    uploadAsset(params: Github.ReposUploadAssetParams, callback?: Github.Callback): Promise<any>;
    editAsset(params: Github.ReposEditAssetParams, callback?: Github.Callback): Promise<any>;
    deleteAsset(params: Github.ReposDeleteAssetParams, callback?: Github.Callback): Promise<any>;
    getStatsContributors(params: Github.ReposGetStatsContributorsParams, callback?: Github.Callback): Promise<any>;
    getStatsCommitActivity(params: Github.ReposGetStatsCommitActivityParams, callback?: Github.Callback): Promise<any>;
    getStatsCodeFrequency(params: Github.ReposGetStatsCodeFrequencyParams, callback?: Github.Callback): Promise<any>;
    getStatsParticipation(params: Github.ReposGetStatsParticipationParams, callback?: Github.Callback): Promise<any>;
    getStatsPunchCard(params: Github.ReposGetStatsPunchCardParams, callback?: Github.Callback): Promise<any>;
    createStatus(params: Github.ReposCreateStatusParams, callback?: Github.Callback): Promise<any>;
    getStatuses(params: Github.ReposGetStatusesParams, callback?: Github.Callback): Promise<any>;
    getCombinedStatus(params: Github.ReposGetCombinedStatusParams, callback?: Github.Callback): Promise<any>;
    getReferrers(params: Github.ReposGetReferrersParams, callback?: Github.Callback): Promise<any>;
    getPaths(params: Github.ReposGetPathsParams, callback?: Github.Callback): Promise<any>;
    getViews(params: Github.ReposGetViewsParams, callback?: Github.Callback): Promise<any>;
    getClones(params: Github.ReposGetClonesParams, callback?: Github.Callback): Promise<any>;
    getHooks(params: Github.ReposGetHooksParams, callback?: Github.Callback): Promise<any>;
    getHook(params: Github.ReposGetHookParams, callback?: Github.Callback): Promise<any>;
    createHook(params: Github.ReposCreateHookParams, callback?: Github.Callback): Promise<any>;
    editHook(params: Github.ReposEditHookParams, callback?: Github.Callback): Promise<any>;
    testHook(params: Github.ReposTestHookParams, callback?: Github.Callback): Promise<any>;
    pingHook(params: Github.ReposPingHookParams, callback?: Github.Callback): Promise<any>;
    deleteHook(params: Github.ReposDeleteHookParams, callback?: Github.Callback): Promise<any>;
  };
  search: {
    repos(params: Github.SearchReposParams, callback?: Github.Callback): Promise<any>;
    code(params: Github.SearchCodeParams, callback?: Github.Callback): Promise<any>;
    commits(params: Github.SearchCommitsParams, callback?: Github.Callback): Promise<any>;
    issues(params: Github.SearchIssuesParams, callback?: Github.Callback): Promise<any>;
    users(params: Github.SearchUsersParams, callback?: Github.Callback): Promise<any>;
    email(params: Github.SearchEmailParams, callback?: Github.Callback): Promise<any>;
  };
  users: {
    getForUser(params: Github.UsersGetForUserParams, callback?: Github.Callback): Promise<any>;
    getById(params: Github.UsersGetByIdParams, callback?: Github.Callback): Promise<any>;
    get(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    update(params: Github.UsersUpdateParams, callback?: Github.Callback): Promise<any>;
    getAll(params: Github.UsersGetAllParams, callback?: Github.Callback): Promise<any>;
    getOrgs(params: Github.UsersGetOrgsParams, callback?: Github.Callback): Promise<any>;
    getOrgMemberships(params: Github.UsersGetOrgMembershipsParams, callback?: Github.Callback): Promise<any>;
    getOrgMembership(params: Github.UsersGetOrgMembershipParams, callback?: Github.Callback): Promise<any>;
    editOrgMembership(params: Github.UsersEditOrgMembershipParams, callback?: Github.Callback): Promise<any>;
    getTeams(params: Github.UsersGetTeamsParams, callback?: Github.Callback): Promise<any>;
    getEmails(params: Github.UsersGetEmailsParams, callback?: Github.Callback): Promise<any>;
    addEmails(params: Github.UsersAddEmailsParams, callback?: Github.Callback): Promise<any>;
    deleteEmails(params: Github.UsersDeleteEmailsParams, callback?: Github.Callback): Promise<any>;
    getFollowersForUser(params: Github.UsersGetFollowersForUserParams, callback?: Github.Callback): Promise<any>;
    getFollowers(params: Github.UsersGetFollowersParams, callback?: Github.Callback): Promise<any>;
    getFollowingForUser(params: Github.UsersGetFollowingForUserParams, callback?: Github.Callback): Promise<any>;
    getFollowing(params: Github.UsersGetFollowingParams, callback?: Github.Callback): Promise<any>;
    checkFollowing(params: Github.UsersCheckFollowingParams, callback?: Github.Callback): Promise<any>;
    checkIfOneFollowersOther(params: Github.UsersCheckIfOneFollowersOtherParams, callback?: Github.Callback): Promise<any>;
    followUser(params: Github.UsersFollowUserParams, callback?: Github.Callback): Promise<any>;
    unfollowUser(params: Github.UsersUnfollowUserParams, callback?: Github.Callback): Promise<any>;
    getKeysForUser(params: Github.UsersGetKeysForUserParams, callback?: Github.Callback): Promise<any>;
    getKeys(params: Github.UsersGetKeysParams, callback?: Github.Callback): Promise<any>;
    getKey(params: Github.UsersGetKeyParams, callback?: Github.Callback): Promise<any>;
    createKey(params: Github.UsersCreateKeyParams, callback?: Github.Callback): Promise<any>;
    deleteKey(params: Github.UsersDeleteKeyParams, callback?: Github.Callback): Promise<any>;
    getGpgKeys(params: Github.UsersGetGpgKeysParams, callback?: Github.Callback): Promise<any>;
    getGpgKey(params: Github.UsersGetGpgKeyParams, callback?: Github.Callback): Promise<any>;
    createGpgKey(params: Github.UsersCreateGpgKeyParams, callback?: Github.Callback): Promise<any>;
    deleteGpgKey(params: Github.UsersDeleteGpgKeyParams, callback?: Github.Callback): Promise<any>;
    promote(params: Github.UsersPromoteParams, callback?: Github.Callback): Promise<any>;
    demote(params: Github.UsersDemoteParams, callback?: Github.Callback): Promise<any>;
    suspend(params: Github.UsersSuspendParams, callback?: Github.Callback): Promise<any>;
    unsuspend(params: Github.UsersUnsuspendParams, callback?: Github.Callback): Promise<any>;
    getBlockedUsers(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    checkBlockedUser(params: Github.UsersCheckBlockedUserParams, callback?: Github.Callback): Promise<any>;
    blockUser(params: Github.UsersBlockUserParams, callback?: Github.Callback): Promise<any>;
    unblockUser(params: Github.UsersUnblockUserParams, callback?: Github.Callback): Promise<any>;
    getRepoInvites(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    acceptRepoInvite(params: Github.UsersAcceptRepoInviteParams, callback?: Github.Callback): Promise<any>;
    declineRepoInvite(params: Github.UsersDeclineRepoInviteParams, callback?: Github.Callback): Promise<any>;
  };
  enterprise: {
    stats(params: Github.EnterpriseStatsParams, callback?: Github.Callback): Promise<any>;
    updateLdapForUser(params: Github.EnterpriseUpdateLdapForUserParams, callback?: Github.Callback): Promise<any>;
    syncLdapForUser(params: Github.EnterpriseSyncLdapForUserParams, callback?: Github.Callback): Promise<any>;
    updateLdapForTeam(params: Github.EnterpriseUpdateLdapForTeamParams, callback?: Github.Callback): Promise<any>;
    syncLdapForTeam(params: Github.EnterpriseSyncLdapForTeamParams, callback?: Github.Callback): Promise<any>;
    getLicense(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    getPreReceiveEnvironment(params: Github.EnterpriseGetPreReceiveEnvironmentParams, callback?: Github.Callback): Promise<any>;
    getPreReceiveEnvironments(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    createPreReceiveEnvironment(params: Github.EnterpriseCreatePreReceiveEnvironmentParams, callback?: Github.Callback): Promise<any>;
    editPreReceiveEnvironment(params: Github.EnterpriseEditPreReceiveEnvironmentParams, callback?: Github.Callback): Promise<any>;
    deletePreReceiveEnvironment(params: Github.EnterpriseDeletePreReceiveEnvironmentParams, callback?: Github.Callback): Promise<any>;
    getPreReceiveEnvironmentDownloadStatus(params: Github.EnterpriseGetPreReceiveEnvironmentDownloadStatusParams, callback?: Github.Callback): Promise<any>;
    triggerPreReceiveEnvironmentDownload(params: Github.EnterpriseTriggerPreReceiveEnvironmentDownloadParams, callback?: Github.Callback): Promise<any>;
    getPreReceiveHook(params: Github.EnterpriseGetPreReceiveHookParams, callback?: Github.Callback): Promise<any>;
    getPreReceiveHooks(params: Github.EmptyParams, callback?: Github.Callback): Promise<any>;
    createPreReceiveHook(params: Github.EnterpriseCreatePreReceiveHookParams, callback?: Github.Callback): Promise<any>;
    editPreReceiveHook(params: Github.EnterpriseEditPreReceiveHookParams, callback?: Github.Callback): Promise<any>;
    deletePreReceiveHook(params: Github.EnterpriseDeletePreReceiveHookParams, callback?: Github.Callback): Promise<any>;
    queueIndexingJob(params: Github.EnterpriseQueueIndexingJobParams, callback?: Github.Callback): Promise<any>;
    createOrg(params: Github.EnterpriseCreateOrgParams, callback?: Github.Callback): Promise<any>;
  };
}

export = Github;