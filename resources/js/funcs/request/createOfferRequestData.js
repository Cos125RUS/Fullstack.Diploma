/**
 * Обработка данных формы подтверждения заявки перед отправкой запроса на сервер
 * @param formData
 * @param cart
 * @returns {{userSelect, cart: {total: (number|string|*), count, items: *[]}}}
 */
export const createOfferRequestData = (formData, cart) => {
    const {items} = cart;

    let requestData = {
        userSelect: formData,
        cart: {
            count: cart.count,
            items: [],
            total: cart.sum,
        },
    };

    items.forEach(item => {
        const {id, selected} = item;
        requestData.cart.items.push({id, selected});
    });

    return requestData;
};