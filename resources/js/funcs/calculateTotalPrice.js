/**
 * Просчёт суммы по карточке товара
 * @param item
 * @returns {number}
 */
export const calculateTotalPrice = (item) => {
    const count = item.use.count[0];

    const searchThickness = item.thickness.filter(it => it.value === item.use.thickness[0]);
    let product = null;
    let price = 0;

    if (searchThickness.length) {
        product = searchThickness[0];
        price = product.price;
    } else return 0;

    const searchSize = product.sizes.items.filter(it => it.value === item.use.size[0]);
    let weight = 0;
    let meters = 0;

    if (searchSize.length) {
        weight = searchSize[0].weight;
        meters = item.use.size[0];
    } else return 0;

    let total = 0;

    switch (item.use.countsType[0]) {
        case 'т.':
            total = price * count;
            break;
        case 'шт.':
            const unitPrice = price * (weight * count);
            total = Math.ceil(unitPrice);
            break;
        case 'м.':
            const meterPrice = price * (weight / meters);
            total = Math.ceil(meterPrice * count);
            break;
        case 'м2.':
            const listPrice = price * weight;
            const args = meters.split('x').map(it => parseFloat(it / 1000));
            const m2Price = listPrice / (args[0] * args[1]);
            total = Math.ceil(m2Price * count);
    }

    return total;
}