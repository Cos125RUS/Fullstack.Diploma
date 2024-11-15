import ProductCardContent from "../../elements/cards/product_card/ProductCardContent";
import ProductInfo from "../../elements/product/ProductInfo";
import ProductCardTopMedia from "../../elements/product/media/ProductCardTopMedia";

/**
 * Расширенная карточка товара
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const ProductMain = ({item}) => {
    item = {
        ...item,
        //заглушка
        description: ["Купить товар «Лист горячекатаный 8 1.5м 6м ст3пс5/сп5 14637» в Екатеринбурге по выгодной цене за метр, тонну или другую единицу измерения. Онлайн-кальк. лятор рассчитает стоимость, размеры и массу изделия (кг, т).",
            "Ознакомьтесь с описанием и техническими характеристиками товара «Лист горячек.атаный 8 1.5м 6м ст3пс5/сп5 14637» на официальном сайте «Сталепромышленной компании» или звоните по номеру в Екатеринбурге +7 (343) 3122111 и получите консультацию наших специалистов.",
            "В продаже широкий ассортимент товаров категории «Лист стальной»: Лист холоднокатаный, Лист низколегированный, Лист горячекатаный и др. Мы отвечаем за качество и предлагаем профессиональный сервис: услуги резки и металлообработки, погрузку и доставку металлопроката."],
        specifications: {
            thickness: {
                title: "толщина", value: "6 мм"
            },
            length: {
                title: "длина", value: "1,5м"
            },
            width: {
                title: "ширина", value: "6 м"
            },
            mark: {
                title: "марка стали", value: "09г2с-15"
            },
            gost: {
                title: "гост", value: "19281"
            }
        }
    };

    return (
        <section className="product-main">
            <div className="product-main__box shadow">
                <ProductCardTopMedia item={item}/>
                <ProductCardContent item={item} className="product"/>
                <ProductInfo item={item}/>
            </div>
        </section>
    );
};

export default ProductMain;