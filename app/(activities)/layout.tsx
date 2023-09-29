"use client";

export default function ActivitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="container flex">{children}</div>;
}
