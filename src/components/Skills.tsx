import { ReactNode } from "react";
import Card from "./Card";

import { ReactComponent as CLogo } from "../assets/svg/c.svg";
import { ReactComponent as CiCdLogo } from "../assets/svg/ci-cd.svg";
import { ReactComponent as Css3Logo } from "../assets/svg/css3.svg";
import { ReactComponent as DatabaseLogo } from "../assets/svg/database.svg";
import { ReactComponent as DockerLogo } from "../assets/svg/docker.svg";
import { ReactComponent as DotnetLogo } from "../assets/svg/dotnet.svg";
import { ReactComponent as GitLogo } from "../assets/svg/git.svg";
import { ReactComponent as Html5Logo } from "../assets/svg/html5.svg";
import { ReactComponent as JavaLogo } from "../assets/svg/java.svg";
import { ReactComponent as JavaScriptLogo } from "../assets/svg/javascript.svg";
import { ReactComponent as NodeJSLogo } from "../assets/svg/nodejs.svg";
import { ReactComponent as PhpLogo } from "../assets/svg/php.svg";
import { ReactComponent as PythonLogo } from "../assets/svg/python.svg";
import { ReactComponent as ReactJSLogo } from "../assets/svg/reactjs.svg";
import { ReactComponent as RulerLogo } from "../assets/svg/ruler.svg";
import { ReactComponent as TestLogo } from "../assets/svg/test.svg";
import { ReactComponent as TypeScriptLogo } from "../assets/svg/typescript.svg";

type Item = {
    logo: JSX.Element;
    label: string;
    value: string;
};

const data: Item[] = [
    {
        logo: <GitLogo className="skill-card__logo" />,
        label: "Git",
        value: "Advanced",
    },
    {
        logo: <DotnetLogo className="skill-card__logo" />,
        label: "C# / WPF",
        value: "Advanced",
    },
    {
        logo: <PhpLogo className="skill-card__logo" />,
        label: "PHP / Laravel",
        value: "Advanced",
    },
    {
        logo: <JavaScriptLogo className="skill-card__logo" />,
        label: "JavaScript",
        value: "Advanced",
    },
    {
        logo: <NodeJSLogo className="skill-card__logo" />,
        label: "NodeJS",
        value: "Advanced",
    },
    {
        logo: <TypeScriptLogo className="skill-card__logo" />,
        label: "TypeScript",
        value: "Advanced",
    },
    {
        logo: <Html5Logo className="skill-card__logo" />,
        label: "HTML",
        value: "Advanced",
    },
    {
        logo: <Css3Logo className="skill-card__logo" />,
        label: "CSS",
        value: "Advanced",
    },
    {
        logo: <ReactJSLogo className="skill-card__logo" />,
        label: "React",
        value: "Intermediate",
    },
    {
        logo: <RulerLogo className="skill-card__logo" />,
        label: "Design Patterns",
        value: "Intermediate",
    },
    {
        logo: <TestLogo className="skill-card__logo" />,
        label: "Unit & Integrated Testing & TDD",
        value: "Intermediate",
    },
    {
        logo: <CiCdLogo className="skill-card__logo" />,
        label: "CI/CD",
        value: "Intermediate",
    },
    {
        logo: <DockerLogo className="skill-card__logo" />,
        label: "Docker",
        value: "Intermediate",
    },
    {
        logo: <JavaLogo className="skill-card__logo" />,
        label: "Java",
        value: "Intermediate",
    },
    {
        logo: <CLogo className="skill-card__logo" />,
        label: "C/C++",
        value: "Intermediate",
    },
    {
        logo: <PythonLogo className="skill-card__logo" />,
        label: "Python",
        value: "Intermediate",
    },
    {
        logo: <DatabaseLogo className="skill-card__logo" />,
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
                        {item.logo}
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
