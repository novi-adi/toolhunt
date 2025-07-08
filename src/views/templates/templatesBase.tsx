import { Html } from "@elysiajs/html";

export const TemplateBase = ({ children }: { children: JSX.Element }) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="/public/globals.css" rel="stylesheet" />
                <script src="https://unpkg.com/htmx.org@1.9.12"></script>
                <title>Toolhunt - find good tools!</title>
            </head>
            <body>
                <main class="max-w-4xl m-auto mt-12">{ children }</main>
            </body>
        </html>
    );
};
