import { ReactNode } from "react";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";

type Item = {
    label: string;
    value: string;
};

const data: Item[] = [
    {
        label: "📧 E-Mail Address",
        value: "MyEmailBox045@Gmail.Com",
    },
    {
        label: "💬 Telegram",
        value: "@AmRo045",
    },
];

const ContactInfo = (): JSX.Element => {
    return (
        <Card header="Contact Information" className="contact-info">
            {data.map(
                (item: Item, index: number): ReactNode => (
                    <DataRow
                        label={item.label}
                        value={item.value}
                        key={index}
                    />
                )
            )}
        </Card>
    );
};

export default ContactInfo;
