import styles from "@/app/components/css/ToolButton.module.css";

import Link from "next/link";

type Props = {
    title?: string;
    href: string;
    children: React.ReactNode;
};

const ToolButtonLink = ({ title, href, children }: Props): JSX.Element => {
    return (
        <Link href={href} className={styles.button} title={title}>
            {children}
        </Link>
    );
};

export default ToolButtonLink;
