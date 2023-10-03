import styles from "@/app/components/css/DataRow.module.css";

type Props = {
    label?: string;
    value?: string;
    children?: React.ReactNode;
};

const DataRow = ({ label, value, children }: Props): JSX.Element => {
    return (
        <div className={styles.dataRow}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.value}>{value ?? children}</div>
        </div>
    );
};

export default DataRow;
