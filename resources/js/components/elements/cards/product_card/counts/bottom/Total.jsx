
const Total = ({useTotal, className}) => {
    const [total, setTotal] = useTotal;

    return (
        <div className={"total " + (className ? className + "-total" : "")}>
            <h4>итого:</h4>
            <p>{total}р.</p>
        </div>
    );
};

export default Total;