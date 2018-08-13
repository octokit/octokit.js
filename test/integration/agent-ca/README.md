# Setup for local SSL tests

We use a self-signed certificate for local SSL testing. If tests start to fail
due to invalid SSL certificates, try to run these commands

```shell
openssl genrsa -out localhost.key 2048
# Set the common name to "localhost"
openssl req -new -key localhost.key -out localhost.csr
openssl genrsa -out ca.key 2048
# Set the common name to "Nock CA"
openssl req -new -x509 -key ca.key -out ca.crt -days 3650
openssl x509 -req -in localhost.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out localhost.crt -days 3650
rm ca.srl localhost.csr ca.key
```

Thanks to [@timrogers](https://github.com/timrogers) who submitted [a similar
fix for nock](https://github.com/nock/nock/pull/1181).
