"use client";

import "./globals.css";
import "nprogress/nprogress.css";

import nProgress from "nprogress";
import { ThemeProvider } from "./providers/ThemeProvider";

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
                <ThemeProvider>
                    <div className="container">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
