FROM oven/bun
WORKDIR /app

COPY dist /app
COPY package.json /app
COPY bun.lockb /app

RUN bun install

CMD ["bun", "server.js"]