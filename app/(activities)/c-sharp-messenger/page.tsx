"use client";

import ActivityDescription from "@/app/components/ActivityDescription";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "@/app/components/Header";

export default function CSharpMessagePage(): JSX.Element {
    return (
        <>
            <title>C# Messenger | Amin Rostami</title>

            <Header title="C# Messenger" />

            <Card>
                <ActivityDescription>
                    Simple messenger app for tutorial purposes.
                </ActivityDescription>

                <DataRow label="Related Article">
                    <a
                        className="styled-link"
                        href="https://sourcesara.com/c-sharp-messenger-application/"
                        dir="auto"
                    >
                        نرم افزار پیام رسان به زبان سی شارپ
                    </a>
                </DataRow>

                <DataRow label="Preview">
                    <video
                        controls
                        preload="none"
                        src="https://serverfiles.ir/dl/sourcesara/video/post/7439.mp4"
                    />
                </DataRow>

                <DataRow label="Gallery">
                    <img
                        src="/images/c-sharp-messenger/1.jpg"
                        alt="C# Messenger 1"
                        decoding="async"
                    />
                    <img
                        src="/images/c-sharp-messenger/2.jpg"
                        alt="C# Messenger 2"
                        decoding="async"
                    />
                    <img
                        src="/images/c-sharp-messenger/3.jpg"
                        alt="C# Messenger 3"
                        decoding="async"
                    />
                    <img
                        src="/images/c-sharp-messenger/4.jpg"
                        alt="C# Messenger 4"
                        decoding="async"
                    />
                    <img
                        src="/images/c-sharp-messenger/5.jpg"
                        alt="C# Messenger 5"
                        decoding="async"
                    />
                    <img
                        src="/images/c-sharp-messenger/6.jpg"
                        alt="C# Messenger 6"
                        decoding="async"
                    />
                </DataRow>
            </Card>
        </>
    );
}
