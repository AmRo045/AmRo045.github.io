const Card = ({ type, header, children }) => {
    return (
        <div className={`card card--${type}`}>
            <div className="card__header">{header}</div>
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
