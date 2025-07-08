import { Context } from "elysia";
import { toolServices } from "../services/toolServices";
import { ITool } from "../types/entity";
import { Html } from "@elysiajs/html";
import { ToolCard } from "../views/components/toolCard";
import { Manage } from "../views/pages/manage";

export const appController = {

    handleGetTools: ({body}: Context) => {
        try {
            const { q } = body as { q: string };

            const allTools = toolServices.getData({ isPublic: true, q });

            return (
                <>
                {allTools.map(tool => {
                    return <ToolCard {...tool} />;
                })} 
                </>
            );
        } catch (error) {
            console.log(error);
            return <div class="msg-error">Something went wrong!</div>;
        }
    },

    handleCreateTool: async ({ body }: Context)=> {
        const { name, image, url, category, description } = body as ITool;

        if (!name || !image || !url || !category || !description) {
            return <div class="msg-error">All fields is required</div>;
        }

        try {
            const tool = toolServices.createData({ name, description, image: (image as Blob).name, url, category });

            await Bun.write(`./public/images/${tool.id}/${tool.image}`, image as Blob);

            return new  Response(null, {
                headers: {
                    "HX-Redirect": "/",
                },
            });
        } catch (error) {
            return <div class="msg-error">Something went wrong!</div>;
        }
    },

    handleManageTool: () =>  {
        const allTools = toolServices.getData({ isPublic: false });

        return <Manage tools={allTools} />;
    },

    handlePublishTool: ({ params }: Context) => {
        const { id } = params ;

        toolServices.publishData(id, "publish");

        return new Response(null, {
            headers: { "HX-Redirect": "/" },
        });
    },

    handleUnPublishTool: ({ params }: Context) => {
        const { id } = params ;

        toolServices.publishData(id, "unpublish");

        return new Response(null, {
            headers: { "HX-Redirect": "/" },
        });
    },

    handleVerifyTool: ({ params }: Context) => {
        const { id } = params ;

        toolServices.verifyData(id, "verify");

        return new Response(null, {
            headers: { "HX-Redirect": "/" },
        });
    },

    handleUnverifyTool: ({ params }: Context) => {
        const { id } = params ;

        toolServices.verifyData(id, "unverify");

        return new Response(null, {
            headers: { "HX-Redirect": "/" },
        });
    },

    handleRedirect: ({ params, set }: Context) => {
        const { id } = params ;

        const { url } = toolServices.updateAnalytics(id);
        
        return new Response(null, {
            status: 302,
            headers: {
                Location: url
            }
        });
    }
};