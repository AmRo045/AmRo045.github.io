type Props = {
    type:
        | "activities"
        | "activities-details"
        | "basic-info"
        | "contributions"
        | "languages"
        | "contact-info"
        | "skills";
    header?: string;
    children?: React.ReactNode;
    id?: string;
};

const Card = ({ type, header, children, id }: Props): JSX.Element => {
    return (
        <div className={`card card--${type}`} id={id}>
            {header && <div className="card__header">{header}</div>}
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
