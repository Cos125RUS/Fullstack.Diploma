const ProductCardCountsCounter = ({useCount}) => {
    const [count, setCount] = useCount;

    const changeCount = (e, operation) => {
        e.preventDefault();
        if (count + operation > 0) {
            setCount(count + operation);
        }
    }

    const enterCount = (e) => {
        const userEnter = e.target.value.trim();
        setCount(parseInt(userEnter));
    };

    const counter = document.querySelector('.counts__count input#counter');
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.activeElement === counter) {
            e.preventDefault();
        }
    });

    return (
        <div className="counts__count">
            <button className="count-minus" onClick={(e) => changeCount(e, -1)}>-</button>
            <input type="number" name="counter" id="counter" min="0" value={count}
                   onChange={(e) => enterCount(e)}/>
            <button className="count-plus" onClick={(e) => changeCount(e, 1)}>+</button>
        </div>
    );
};

export default ProductCardCountsCounter;