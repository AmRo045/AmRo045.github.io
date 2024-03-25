"use client";

import "@/app/globals.css";
import "nprogress/nprogress.css";

import nProgress from "nprogress";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    nProgress.configure({
        showSpinner: false,
    });

    return (
        <html lang="en">
            <head>
                <title>Amin Rostami</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="My personal page | AmRo | AmRo045"
                />
                <link
                    rel="icon"
                    href="/favicon.svg"
                    sizes="any"
                    type="image/svg+xml"
                />
            </head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
