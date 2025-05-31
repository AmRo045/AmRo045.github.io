import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Providers } from "./providers";

import { siteConfig } from "@/src/core/config";
import { Navbar } from "@/src/components/navbar";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.homepage),
    title: {
        default: siteConfig.name,
        template: `%s • ${siteConfig.name}`
    },
    description: siteConfig.description
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
            </head>

            <body className="min-h-screen bg-background font-monospace antialiased">
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="relative flex flex-col h-screen">
                        <Navbar />
                        <main className="w-[340px] mx-auto mt-8 py-12 px-2">{children}</main>
                    </div>
                </Providers>

                <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} gaId="G-CMPRBJ96SH" />
            </body>
        </html>
    );
}
