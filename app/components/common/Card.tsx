import styles from "@/app/components/css/Card.module.css";

type Props = {
    header?: string;
    children?: React.ReactNode;
    id?: string;
};

const Card = ({ header, children, id }: Props): JSX.Element => {
    return (
        <div className={styles.card} id={id}>
            {header && <div className={styles.header}>{header}</div>}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Card;
