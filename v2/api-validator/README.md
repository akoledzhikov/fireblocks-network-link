# Fireblocks Network Link v2 API Validator

This project contains the Fireblocks Network Link v2 API validation tool.
The tool is built to be executed as a stand-alone application that sends various 
HTTP requests to the system under test to validate the correctness of the API
implementation.

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm)


## Quick start

Setup:

```shell
nvm install 18.14.2
nvm use
npm install
```


### Use the bundled mock server

Run the mock server:

```shell
npm run server
```

In a separate shell:

```shell
npm run test
```

The tests generate report files in the validation tool root directory in JSON and HTML formats.

### Use your own server

```shell
SERVER="my-server-base-url" npm run test
```

When testing your own server, you will usually need to configure the credentials of the user
connecting to the server and the request signing method the server uses. All these parameters
could be configured using the environment variables. Make a copy of `env.example`, rename it
to `.env` and edit the values. `src/config/index.ts` contains all the environment variable
definitions and the possible values.


## Design

- `src/config` contains the tool configuration.
  - The same configuration is used both by the server and the client.
  - Configuration values could be overridden either by editing the JSON files
    in the same directory or by setting environment variables.
- `src/server` contains the code of a web server fully implementing the API.
  - This is a mock implementation - the server doesn't do anything "real".
  - Any state is managed in-memory.
  - Values from the shared configuration in `src/config` are used to coordinate
    scenarios between the server and the client.
  - The official OpenAPI document, located in `../fb-xcom-openapi` is used to
    validate the incoming requests and the outgoing responses.
- `src/client` contains the API client.
- `tests` contains the API validation tests.
  - The tests use the client in `src/client` to communicate with the server.