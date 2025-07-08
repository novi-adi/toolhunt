import { ITool } from "../../types/entity";
import { ToolCard } from "../components/toolCard";
import { TemplateBase } from "../templates/templatesBase";
import { Html } from "@elysiajs/html";

export const Manage = ({ tools }: { tools: ITool[] }) => {
    return (
        <TemplateBase>
            <main class="space-y-12">
                {tools.map((tool) => {
                    return (
                        <main class="flex gap-4 items-center">
                            <img src={`/public/images/${tool.id}/${tool.image}`} class="w-24 h-24 rounded-lg" />
                            <div class="space-y-2">
                                <h3>{tool.name}</h3>
                                <p>{tool.description}</p>
                                <div class="flex gap-2">
                                    {tool.isPublic === 0 ? <button class="w-fit" hx-patch={`/tools/${tool.id}/publish`}>Publish</button> : <button class="w-fit" hx-patch={`/tools/${tool.id}/unpublish`}>UnPublish</button>}
                                    {tool.verified === 0 ? <button class="w-fit" hx-patch={`/tools/${tool.id}/verify`}>Verify</button> : <button class="w-fit" hx-patch={`/tools/${tool.id}/unverify`}>Unverify</button>}
                                </div>
                            </div>
                        </main>
                    );
                })}
            </main>
        </TemplateBase>
    );
};