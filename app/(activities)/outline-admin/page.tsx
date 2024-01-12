"use client";

import ActivityDescription from "@/app/components/ActivityDescription";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function OutlineAdminPage(): JSX.Element {
    return (
        <>
            <title>Outline Admin | Amin Rostami</title>

            <Header title="Outline Admin" />

            <Card>
                <ActivityDescription>
                    Web interface for the Outline VPN management.
                </ActivityDescription>

                <DataRow label="GitHub Page">
                    <a
                        className="styled-link"
                        href="https://github.com/AmRo045/OutlineAdmin"
                        dir="auto"
                    >
                        https://github.com/AmRo045/OutlineAdmin
                    </a>
                </DataRow>

                <DataRow label="Gallery">
                    <img
                        src="/images/outline-admin/1.png"
                        alt="Outline Admin 1"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/2.png"
                        alt="Outline Admin 2"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/3.png"
                        alt="Outline Admin 3"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/4.png"
                        alt="Outline Admin 4"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/5.png"
                        alt="Outline Admin 5"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/6.png"
                        alt="Outline Admin 6"
                        decoding="async"
                    />
                    <img
                        src="/images/outline-admin/7.png"
                        alt="Outline Admin 7"
                        decoding="async"
                    />
                </DataRow>
            </Card>
        </>
    );
}
