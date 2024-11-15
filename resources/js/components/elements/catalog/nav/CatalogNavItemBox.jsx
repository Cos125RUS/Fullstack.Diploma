import CatalogNavItem from "./CatalogNavItem";
import CatalogNavCurrentItem from "./CatalogNavCurrentItem";

const CatalogNavItemBox = ({item, currentItem}) => {
    return (
        <>
            <CatalogNavItem item={item}/>
            {currentItem === item.name ? <CatalogNavCurrentItem children={item.children}/> : ""}
        </>
    )
};

export default CatalogNavItemBox;