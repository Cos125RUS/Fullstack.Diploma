/**
 * Кнопка открытия окна со справочной информацией
 * @returns {JSX.Element}
 * @constructor
 */
const ProductCardInfoBtn = ({handleModalOpen}) => {
    /**
     * Открыть модальное окно с информацией
     * @param e
     */
    const openInfo = (e) => {
        e.preventDefault();
        handleModalOpen();
    };

    return (
        <button className="option__info-link cp" onClick={e => openInfo(e)}>
            <svg width="4.333496" height="15.166504"
                 viewBox="0 0 4.3335 15.1665" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <path id="Vector"
                      d="M3.79 1.62C3.79 2.05 3.62 2.46 3.31 2.77C3.01 3.08 2.59 3.25 2.16 3.25C1.73 3.25 1.32 3.08 1.01 2.77C0.71 2.47 0.53 2.05 0.53 1.62C0.53 1.19 0.7 0.78 1.01 0.47C1.31 0.17 1.73 0 2.16 0C2.59 0 3 0.16 3.31 0.47C3.61 0.78 3.79 1.19 3.79 1.62ZM4.33 14.08L4.33 7.58C4.33 7.01 4.1 6.46 3.69 6.05C3.29 5.64 2.73 5.41 2.16 5.41L1.08 5.41C0.79 5.41 0.51 5.52 0.31 5.73C0.11 5.94 0 6.21 0 6.5C0 6.78 0.11 7.06 0.31 7.26C0.52 7.47 0.79 7.58 1.08 7.58L2.16 7.58L2.16 14.08C2.16 14.37 2.27 14.64 2.48 14.84C2.69 15.05 2.96 15.16 3.25 15.16C3.53 15.16 3.81 15.05 4.01 14.84C4.22 14.64 4.33 14.37 4.33 14.08L4.33 14.08Z"
                      fill="#FEFEFE" fillOpacity="1.000000"
                      fillRule="nonzero"/>
            </svg>
        </button>
    );
};

export default ProductCardInfoBtn;