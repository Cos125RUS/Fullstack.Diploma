/**
 * Заглушка для страницы каталога без выбранной категории
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogCleanBox = () => {
    return (
        <div className="catalog-main__product-box">
            <div className="catalog-main__product-ul catalog-main__product-clean">
                <div className="catalog-main__product-item catalog-main__product-clean"></div>
            </div>
        </div>
    );
};

export default CatalogCleanBox;