import { setupExpressErrorHandler } from "@sentry/bun";
import express from "express";

const app = express();
const port = 3000;

setupExpressErrorHandler(app);

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

server.listen();
