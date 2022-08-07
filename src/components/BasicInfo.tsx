import { ReactNode } from 'react';
import Card from './Card';
import DataRow from './DataRow';

type Item = {
    label: string;
    value: string;
};

const data: Item[] = [
    {
        label: '🎂 Date of Birth',
        value: '1997-8-14',
    },
    {
        label: '♂ Gender',
        value: 'Male',
    },
    {
        label: '💍 Marital Status',
        value: 'Single',
    },
    {
        label: '👮‍♂️ Military Service Status',
        value: '😭 Not Served Yet',
    },
    {
        label: '📚 Education Level',
        value: 'Bachelor Software Engineering',
    },
    {
        label: '📌 Location',
        value: 'Iran ➡ Tehran ➡ Eslamshahr',
    },
];

const BasicInfo = (): JSX.Element => {
    return (
        <Card type="basic-info" header="Basic Information">
            {data.map(
                (item: Item): ReactNode => (
                    <DataRow label={item.label} value={item.value} />
                )
            )}
        </Card>
    );
};

export default BasicInfo;
