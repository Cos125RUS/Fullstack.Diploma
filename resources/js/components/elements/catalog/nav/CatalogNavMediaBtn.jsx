
const CatalogNavMediaBtn = () => {
    return (
        <>
            <input type="checkbox" name="catalog-menu-checkbox" id="catalog-menu-checkbox"
                   className="catalog-main__menu-checkbox dropdown-menu__checkbox"/>
            <label htmlFor="catalog-menu-checkbox"
                   className="catalog-main__menu-label catalog-main__menu-button dropdown-menu__button-nav">КАТАЛОГ</label>
        </>
    );
};

export default CatalogNavMediaBtn;