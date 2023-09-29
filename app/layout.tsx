"use client";

import "./globals.css";
import "nprogress/nprogress.css";

import nProgress from "nprogress";
import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";

const metadata: Metadata = {
    title: "Amin Rostami",
    description: "My personal page | AmRo | AmRo045",
};

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
