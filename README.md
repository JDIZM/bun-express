# bun-express


A simple express api with bun.sh

https://bun.sh/guides/ecosystem/express


```bash
# install bun
curl -fsSL https://bun.sh/install | bash

# install dependencies
bun install

# run the dev server
bun dev

# build
bun build:bun
```

### Env

Set the bun environment to development or production in the `.env` file.


```
NODE_ENV=development
```

For more info on how bun handles environments see:

- https://bun.sh/docs/cli/run#environment-variables
- https://bun.sh/guides/runtime/set-env


### Testing

see the docs for the test runner: https://bun.sh/docs/cli/test

```bash
bun test
```

## Build with docker

```bash
# build the app
bun build:bun

# build with docker
docker build . --tag bun-express

# start the docker container
docker run -d -p 3000:3000 bun-express

# view it running on localhost
curl localhost:3000
```

## Database

This is currently setup to use MongoDB. If you would like to switch the provider then take a look at the [prisma docs](https://www.prisma.io/docs/concepts/components/prisma-schema/data-sources)

You can replace `DATABASE_URL` with your mongodb connection string whether that be cloud or locally hosted.

Note: when using Prisma the MongoDB database connector uses transactions to support nested writes. Transactions require a replica set deployment. The easiest way to deploy a replica set is with Atlas. It's free to get started.

https://www.prisma.io/docs/concepts/database-connectors/mongodb

## Prisma

https://bun.sh/guides/ecosystem/prisma


### Generate schema
You will need to generate the models after you make changes to the schema.prisma file or the first time you run the app.

```bash
bunx prisma generate  
```

### Seed the database

```bash
bun seed
```