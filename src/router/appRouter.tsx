import { Elysia } from "elysia";
import { Home } from "../views/pages/home"
import { Html } from "@elysiajs/html";
import { SubmissionForm } from "../views/pages/submissionForm";
import { appController } from "../controllers/appController";

export const appRouter = new Elysia()
    // interfaces
    .get("/", () => <Home />)
    .get("/tools/manage", () => appController.handleManageTool())
    .get("/tools/submissions", () => <SubmissionForm />)
    //functionality
    .post("/tools", appController.handleGetTools)
    .get("/tools/:id", appController.handleRedirect)
    .post("/tools/submissions", appController.handleCreateTool)
    .patch("tools/:id/publish", appController.handlePublishTool)
    .patch("tools/:id/unpublish", appController.handleUnPublishTool)
    .patch("tools/:id/verify", appController.handleVerifyTool)
    .patch("tools/:id/unverify", appController.handleUnverifyTool)
    ;
    