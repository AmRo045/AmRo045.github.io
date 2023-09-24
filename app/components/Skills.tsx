import { ReactNode } from "react";
import Card from "./common/Card";

import DatabaseIcon from "./svg/DatabaseIcon";
import DockerIcon from "./svg/DockerIcon";
import DotnetIcon from "./svg/DotnetIcon";
import GitIcon from "./svg/GitIcon";
import Html5Icon from "./svg/Html5Icon";
import JavaIcon from "./svg/JavaIcon";
import JavaScriptIcon from "./svg/JavaScriptIcon";
import NodeJSIcon from "./svg/NodeJSIcon";
import PhpIcon from "./svg/PhpIcon";
import PythonIcon from "./svg/PythonIcon";
import ReactJSIcon from "./svg/ReactJSIcon";
import RulerIcon from "./svg/RulerIcon";
import TestIcon from "./svg/TestIcon";
import TypeScriptIcon from "./svg/TypeScriptIcon";
import Css3Icon from "./svg/Css3Icon";
import CIcon from "./svg/CIcon";
import CiCdIcon from "./svg/CiCdIcon";

type Item = {
    icon: JSX.Element;
    label: string;
    value: string;
};

const data: Item[] = [
    {
        icon: <GitIcon />,
        label: "Git",
        value: "Advanced",
    },
    {
        icon: <DotnetIcon />,
        label: "C# / WPF",
        value: "Advanced",
    },
    {
        icon: <PhpIcon />,
        label: "PHP / Laravel",
        value: "Advanced",
    },
    {
        icon: <JavaScriptIcon />,
        label: "JavaScript",
        value: "Advanced",
    },
    {
        icon: <NodeJSIcon />,
        label: "NodeJS",
        value: "Advanced",
    },
    {
        icon: <TypeScriptIcon />,
        label: "TypeScript",
        value: "Advanced",
    },
    {
        icon: <Html5Icon />,
        label: "HTML",
        value: "Advanced",
    },
    {
        icon: <Css3Icon />,
        label: "CSS",
        value: "Advanced",
    },
    {
        icon: <ReactJSIcon />,
        label: "React",
        value: "Intermediate",
    },
    {
        icon: <RulerIcon />,
        label: "Design Patterns",
        value: "Intermediate",
    },
    {
        icon: <TestIcon />,
        label: "Unit & Integrated Testing & TDD",
        value: "Intermediate",
    },
    {
        icon: <CiCdIcon />,
        label: "CI/CD",
        value: "Intermediate",
    },
    {
        icon: <DockerIcon />,
        label: "Docker",
        value: "Intermediate",
    },
    {
        icon: <JavaIcon />,
        label: "Java",
        value: "Intermediate",
    },
    {
        icon: <CIcon />,
        label: "C/C++",
        value: "Intermediate",
    },
    {
        icon: <PythonIcon />,
        label: "Python",
        value: "Intermediate",
    },
    {
        icon: <DatabaseIcon />,
        label: "SQL Server & MySQL",
        value: "Intermediate",
    },
];

const Skills = (): JSX.Element => {
    return (
        <Card type="skills" header="Technical Skills">
            {data.map(
                (item: Item, index: number): ReactNode => (
                    <div className="skill-card" key={index}>
                        {item.icon}
                        <div>
                            <div className="skill-card__name">{item.label}</div>
                            <div className="skill-card__level">
                                {item.value}
                            </div>
                        </div>
                    </div>
                )
            )}
        </Card>
    );
};

export default Skills;
