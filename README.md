# sentry-express-bun-demo

## Start

```bash
env SENTRY_DSN=... bun run dev
```

## Expected output

```
Calling Sentry.init()
Preload done
[Sentry] express is not instrumented. Please make sure to initialize Sentry in a separate file that you `--import` when running node, see: https://docs.sentry.io/platforms/javascript/guides/express/install/esm/.
Example app listening on http://localhost:3000
```
