import express from "express";
import { pinoHttp } from "pino-http";
import { test } from "./helpers";

const { logger } = pinoHttp();

const env = Bun.env.NODE_ENV || "development";
const port = Bun.env.PORT || 3000;

console.log(`Bun is running in ${env}`);

const app = express();

app.use(
  pinoHttp({
    logger
  })
);


app.get("/", (req, res) => {
  res.send(`Bun + Express + TypeScript Server ${test}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
