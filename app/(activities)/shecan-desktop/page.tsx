"use client";

import ActivityDescription from "@/app/components/ActivityDescription";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function ShecanDesktopPage(): JSX.Element {
    return (
        <>
            <title>Shecan Desktop | Amin Rostami</title>

            <Header title="Shecan Desktop" />

            <Card>
                <ActivityDescription>
                    Simple Windows application for Shecan.ir service.
                </ActivityDescription>

                <DataRow label="Source Code">
                    <a href="https://github.com/AmRo045/ShecanDesktop">
                        GitHub Page
                    </a>
                </DataRow>

                <DataRow label="Gallery">
                    <img
                        src="/images/shecan-desktop/1.png"
                        alt="Shecan Desktop"
                        decoding="async"
                    />
                </DataRow>
            </Card>
        </>
    );
}
