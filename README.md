# TrendRepositories

This repository includes 3 apps and 2 libs. This project created by using [NX](https://nx.dev/) build system.

### Apps

- Bff 
  - GraphQL
  - Apollo Server
- Client
  - Next.js
  - Apollo Client
- Client e2e
  - Cypress

### Libs

- api-interface
- ui
  - styled-components

## Installation

```bash
$ npm install
```

## Development
```bash
$ npm run start # start bff and client
$ npm run start:bff
$ npm run start:client
```

## Build
```bash
$ npm run build # build bff and
$ npm run build:bff
$ npm run build:client
```

## Tests
```sh
$ npm run test # run all project tests with coverage
$ npm run test:ui
$ npm run test:ui:coverage
$ npm run test:client
$ npm run test:client:coverage
$ npm run test:bff
$ npm run test:bff:coverage
```

## e2e Test
```sh
$ npm run e2e
$ npm run e2e:watch
```

I didn't write tests for all cases. I aimed to show you my test writing ability. 

# Deployment

```sh
$ heroku buildpacks:add -a trend-repositories-client heroku-community/multi-procfile
$ heroku buildpacks:add -a trend-repositories-backend heroku-community/multi-procfile

$ heroku config:set -a trend-repositories-client PROCFILE=./Procfile.client   
$ heroku config:set -a trend-repositories-backend PROCFILE=./Procfile.bff   
```
