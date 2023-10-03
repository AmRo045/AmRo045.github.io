import styles from "@/app/components/css/Card.module.css";

type Props = {
    header?: string;
    children?: React.ReactNode;
    id?: string;
    className?: string;
};

const Card = ({ header, children, id, className }: Props): JSX.Element => {
    return (
        <div className={[styles.card, className].join(" ")} id={id}>
            {header && <div className={styles.header}>{header}</div>}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Card;
