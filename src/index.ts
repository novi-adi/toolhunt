import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import { appRouter } from "./router/appRouter";

const app = new Elysia()
// plugins
.use(html())
.use(staticPlugin())
// routes
.use(appRouter)
// port
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
