/**
 * Проверка типов параметров, передаваемый в стилизованные компаненты
 * @param prop
 * @param target
 * @returns {boolean}
 */
export const shouldForwardProp = (prop, target) => {
    return typeof prop === 'string' || typeof prop === 'number';
};