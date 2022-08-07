import { ReactNode } from 'react';
import Card from './Card';
import DataRow from './DataRow';

type Item = {
    label: string;
    value: string;
};

const data: Item[] = [
    {
        label: '⏱ Git',
        value: 'Advanced',
    },
    {
        label: '🔪 C# & .NET',
        value: 'Advanced',
    },
    {
        label: '🖌 WPF',
        value: 'Advanced',
    },
    {
        label: 'PHP/Laravel',
        value: 'Advanced',
    },
    {
        label: 'JavaScript & TypeScript & NodeJS',
        value: 'Advanced',
    },
    {
        label: 'HTML, CSS',
        value: 'Advanced',
    },
    {
        label: '📐 Design Patterns',
        value: 'Intermediate',
    },
    {
        label: '🧪 Unit & Integrated Testing & TDD',
        value: 'Intermediate',
    },
    {
        label: '🖇 CI/CD',
        value: 'Intermediate',
    },
    {
        label: '🚢 Docker',
        value: 'Intermediate',
    },
    {
        label: '☕ Java',
        value: 'Intermediate',
    },
    {
        label: '🗡 C/C++',
        value: 'Intermediate',
    },
    {
        label: '🐍 Python',
        value: 'Intermediate',
    },
    {
        label: '🗄 SQL Server & MySQL',
        value: 'Intermediate',
    },
    {
        label: '✒ Adobe XD & Adobe Illustrator & Adobe Photoshop',
        value: 'Intermediate',
    },
    {
        label: '⚛ React',
        value: 'Intermediate',
    },
];

const Skills = (): JSX.Element => {
    return (
        <Card type="skills" header="Technical Skills">
            {data.map(
                (item: Item): ReactNode => (
                    <DataRow label={item.label} value={item.value} />
                )
            )}
        </Card>
    );
};

export default Skills;
