"use client";

import ActivityDescription from "@/app/components/ActivityDescription";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function MaterialHubPage(): JSX.Element {
    return (
        <>
            <title>Material Hub | Amin Rostami</title>

            <Header title="Material Hub" />

            <Card>
                <ActivityDescription>
                    A material management system for ArcoGroup.org company.
                </ActivityDescription>

                <DataRow label="Preview">
                    <video
                        src="https://www.dropbox.com/s/zhrvf3qdyt5813f/MaterialHub.mp4?dl=1"
                        controls
                        preload="none"
                    />
                </DataRow>
            </Card>
        </>
    );
}
