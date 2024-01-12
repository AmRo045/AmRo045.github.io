"use client";

export default function ActivitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className="container">{children}</main>;
}
