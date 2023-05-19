import { ReactNode } from "react";
import Card from "./Card";
import DataRow from "./DataRow";

type Item = {
    label: string;
    value: string;
};

const data: Item[] = [
    {
        label: "Turkish (Azari)",
        value: "😎 Native",
    },
    {
        label: "Persian",
        value: "🧐 Fluent",
    },
    {
        label: "English",
        value: "🤓 Intermediate",
    },
];

const Languages = (): JSX.Element => {
    return (
        <Card type="languages" header="Languages">
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

export default Languages;
