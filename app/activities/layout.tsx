"use client";

export default function DetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body>
            <div className="container flex">{children}</div>
        </body>
    );
}
