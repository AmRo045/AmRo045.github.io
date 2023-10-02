import styles from "@/app/components/css/ToolButton.module.css";

type Props = {
    title?: string;
    children: React.ReactNode;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const ToolButton = ({ title, children, onClick }: Props): JSX.Element => {
    return (
        <button className={styles.button} onClick={onClick} title={title}>
            {children}
        </button>
    );
};

export default ToolButton;
