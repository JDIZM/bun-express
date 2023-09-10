import express from "express";
import dotenv from "dotenv";
import { pinoHttp } from "pino-http";
import { test } from "./helpers";

const { logger } = pinoHttp();

const env = Bun.env.NODE_ENV || "development";
const port = Bun.env.PORT || 3000;

if (env !== "production") {
  dotenv.config();
}

const app = express();

app.use(
  pinoHttp({
    logger
  })
);

app.get("/", (req, res) => {
  logger.info("hello world");
  res.send(`Bun + Express + TypeScript Server ${test}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
