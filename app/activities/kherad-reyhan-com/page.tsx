"use client";

import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function KheradReyhanComPage(): JSX.Element {
    return (
        <>
            <Header title="Kherad-Rayhan.Com" />

            <Card type="activities-details">
                <div className="activity-description">
                    School Enrollment Website (My first web project).
                </div>
                <DataRow label="Laravel Version">
                    <video
                        src="https://www.dropbox.com/s/irbiv7tz6l04f1l/kherad-reyhan.test.mp4?dl=1"
                        controls
                        preload="none"
                    />
                </DataRow>

                <DataRow label="Plain PHP Version">
                    <a
                        href="http://kherad-reyhan.com/"
                        className="styled-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kherad-Rayhan.Com
                    </a>
                </DataRow>
            </Card>
        </>
    );
}
