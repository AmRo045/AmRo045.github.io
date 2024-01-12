import styles from "@/app/components/css/Header.module.css";

import BackIcon from "@/app/components/svg/BackIcon";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import ToolButtonLink from "@/app/components/common/ToolButtonLink";

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    return (
        <header className={styles.header}>
            <ToolButtonLink href={"/"} title="Back to home page">
                <BackIcon width={24} />
            </ToolButtonLink>

            <h3 className="hide-on-sm-screen">{title}</h3>

            <ThemeSwitcher />

            <strong className="show-on-sm-screen w-100 text-center">
                {title}
            </strong>
        </header>
    );
}
