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
```


### Testing

see the docs for the test runner: https://bun.sh/docs/cli/test

```
bun test
```

## Build with docker

```
# build the app
`npm run build`

# build with docker
`docker build . --tag bun-express`

# start the docker container
`docker run -d -p 3000:3000 bun-express`

# view it running on localhost
`curl localhost:3000`
```
