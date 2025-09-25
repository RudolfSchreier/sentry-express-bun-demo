import * as Sentry from "@sentry/bun";
import { exit } from "node:process";

if (process.env.SENTRY_DSN === undefined) {
  console.log("Please specify a SENTRY_DSN env var.");
  exit(1);
}

console.log("Calling Sentry.init()");
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  sendDefaultPii: true,
  tracesSampleRate: 0.0,
  enableLogs: true,
  debug: true,
});
console.log("Preload done");
