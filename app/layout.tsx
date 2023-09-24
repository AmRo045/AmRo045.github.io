import "./globals.css";
import "nprogress/nprogress.css";

import nProgress from "nprogress";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amin Rostami",
    description: "My personal web page",
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
                <div className="container">{children}</div>
            </body>
        </html>
    );
}
