import ExclamationSvg from "../../svg/modal/ExclamationSvg";

/**
 * Сообщение о некоректности ввода
 * @returns {JSX.Element}
 * @constructor
 */
const ModalWarning = ({text, row}) => {
    const style = {top: `${-40 + 56 * (row - 1)}px`};

    return (
        <div className="modal__warning" style={style}>
            <p>{text}</p>
            <ExclamationSvg/>
        </div>
    );
};

export default ModalWarning;