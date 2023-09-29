type Props = {
    type:
        | "activities"
        | "activities-details"
        | "basic-info"
        | "contributions"
        | "languages"
        | "skills";
    header?: string;
    children?: React.ReactNode;
};

const Card = ({ type, header, children }: Props): JSX.Element => {
    return (
        <div className={`card card--${type}`}>
            {header && <div className="card__header">{header}</div>}
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
