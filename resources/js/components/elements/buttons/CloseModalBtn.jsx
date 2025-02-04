import classNames from "classnames";

/**
 * Кнопка закрытия модального окна
 * @param closeModal
 * @param className
 * @param isAbsolute
 * @returns {JSX.Element}
 * @constructor
 */
const CloseModalBtn = ({closeModal, className, isAbsolute = false}) => {
    const btnClassName = classNames("modal-close__btn", "cross-expanding", isAbsolute && "absolute", className && className);
    const closeClassName = classNames("modal-close", isAbsolute && "relative");

    return (
        <div className={closeClassName}>
            <button className={btnClassName} onClick={closeModal}>
                <svg className="modal-close__cross" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path id="Vector"
                          d="M9.39 0.07C9.51 0.12 9.62 0.19 9.71 0.28C9.8 0.37 9.87 0.48 9.92 0.59C9.97 0.71 10 0.84 10 0.97C10 1.1 9.97 1.22 9.92 1.34C9.87 1.46 9.8 1.57 9.71 1.66L6.37 4.99L9.71 8.33C9.8 8.42 9.87 8.53 9.92 8.65C9.97 8.76 10 8.89 10 9.02C10 9.15 9.97 9.27 9.92 9.39C9.87 9.51 9.8 9.62 9.71 9.71C9.62 9.8 9.51 9.87 9.39 9.92C9.28 9.97 9.15 10 9.02 10C8.89 10 8.77 9.97 8.65 9.92C8.53 9.87 8.42 9.8 8.33 9.71L5 6.37L1.66 9.71C1.57 9.8 1.46 9.87 1.34 9.92C1.22 9.97 1.1 10 0.97 10C0.84 10 0.71 9.97 0.6 9.92C0.48 9.87 0.37 9.8 0.28 9.71C0.19 9.62 0.12 9.51 0.07 9.39C0.02 9.28 0 9.15 0 9.02C0 8.89 0.02 8.77 0.07 8.65C0.12 8.53 0.19 8.42 0.28 8.33L3.62 5L0.28 1.66C0.19 1.57 0.12 1.46 0.07 1.34C0.02 1.23 0 1.1 0 0.97C0 0.84 0.02 0.72 0.07 0.6C0.12 0.48 0.19 0.37 0.28 0.28C0.37 0.19 0.48 0.12 0.6 0.07C0.72 0.02 0.84 0 0.97 0C1.1 0 1.22 0.02 1.34 0.07C1.46 0.12 1.57 0.19 1.66 0.28L5 3.62L8.33 0.28C8.42 0.19 8.53 0.12 8.65 0.07C8.77 0.02 8.89 0 9.02 0C9.15 0 9.28 0.02 9.39 0.07L9.39 0.07Z"
                          fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
                </svg>
            </button>
        </div>
    );
};

export default CloseModalBtn;