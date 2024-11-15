const SalesSectionContent = ({title, text}) => {
    const className = "sales-section__content";

    return (
        <div className={className}>
            <h1 className={className + "-title"}>{title}</h1>
            <p className={className + "-text"}>{text}</p>
        </div>
    );
};

export default SalesSectionContent;