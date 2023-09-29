"use client";

import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function MaterialHubPage(): JSX.Element {
    return (
        <>
            <title>Material Hub | Amin Rostami</title>

            <Header title="Material Hub" />

            <Card type="activities-details">
                <div className="activity-description">
                    A material management system for ArcoGroup.org company.
                </div>
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
