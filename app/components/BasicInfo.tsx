import { ReactNode } from "react";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import { formatBirthDate } from "@/app/utils";

type Item = {
    label: string;
    value: string;
};

const data: Item[] = [
    {
        label: "🎂 Date of Birth",
        value: formatBirthDate("1997-08-14"),
    },
    {
        label: "♂ Gender",
        value: "Male",
    },
    {
        label: "💍 Marital Status",
        value: "Single",
    },
    {
        label: "👮‍♂️ Military Service Status",
        value: "😭 Not Served Yet",
    },
    {
        label: "📚 Education Level",
        value: "Bachelor Software Engineering",
    },
    {
        label: "📌 Location",
        value: "Iran ➡ Tehran",
    },
];

const BasicInfo = (): JSX.Element => {
    return (
        <Card type="basic-info" header="Basic Information">
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

export default BasicInfo;
