import Link from "next/link";
import BackIcon from "@/app/components/svg/BackIcon";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    return (
        <header className="header">
            <Link
                href={"/"}
                className="header__back-button"
                title="Back to home page"
            >
                <BackIcon width={24} />
            </Link>

            <h3>{title}</h3>

            <ThemeSwitcher />
        </header>
    );
}
