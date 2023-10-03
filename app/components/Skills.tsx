import Card from "@/app/components/common/Card";
import { ReactNode } from "react";

import SkillCard from "@/app/components/SkillCard";
import CIcon from "@/app/components/svg/CIcon";
import CiCdIcon from "@/app/components/svg/CiCdIcon";
import Css3Icon from "@/app/components/svg/Css3Icon";
import DatabaseIcon from "@/app/components/svg/DatabaseIcon";
import DockerIcon from "@/app/components/svg/DockerIcon";
import DotnetIcon from "@/app/components/svg/DotnetIcon";
import GitIcon from "@/app/components/svg/GitIcon";
import Html5Icon from "@/app/components/svg/Html5Icon";
import JavaIcon from "@/app/components/svg/JavaIcon";
import JavaScriptIcon from "@/app/components/svg/JavaScriptIcon";
import NodeJSIcon from "@/app/components/svg/NodeJSIcon";
import PhpIcon from "@/app/components/svg/PhpIcon";
import PythonIcon from "@/app/components/svg/PythonIcon";
import ReactJSIcon from "@/app/components/svg/ReactJSIcon";
import RulerIcon from "@/app/components/svg/RulerIcon";
import TestIcon from "@/app/components/svg/TestIcon";
import TypeScriptIcon from "@/app/components/svg/TypeScriptIcon";

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
        <Card header="Technical Skills" className="skills">
            <div className="skills-wrapper">
                {data.map(
                    (item: Item, index: number): ReactNode => (
                        <SkillCard
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            level={item.value}
                        />
                    )
                )}
            </div>
        </Card>
    );
};

export default Skills;
