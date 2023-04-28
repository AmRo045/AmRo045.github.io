import { ReactNode } from "react";
import Card from "./Card";
import DataRow from "./DataRow";

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
        label: "📞 Phone Number",
        value: "+98 914-619-0965",
    },
];

const ContactInfo = (): JSX.Element => {
    return (
        <Card type="contact-info" header="Contact Information">
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
