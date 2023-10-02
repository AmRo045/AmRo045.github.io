import styles from "@/app/components/css/Header.module.css";

import Link from "next/link";
import BackIcon from "@/app/components/svg/BackIcon";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    return (
        <header className={styles.header}>
            <Link
                href={"/"}
                className={styles.backButton}
                title="Back to home page"
            >
                <BackIcon width={24} />
            </Link>

            <h3>{title}</h3>

            <ThemeSwitcher />
        </header>
    );
}
