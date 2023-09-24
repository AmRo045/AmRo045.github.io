type Props = {
    label: string;
    value?: string;
    children?: React.ReactNode;
};

const DataRow = ({ label, value, children }: Props): JSX.Element => {
    return (
        <div className="data-row">
            <div className="data-row__label">{label}</div>
            <div className="data-row__value">{value ?? children}</div>
        </div>
    );
};

export default DataRow;
