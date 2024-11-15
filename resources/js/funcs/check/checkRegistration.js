/**
 * Проверка данных, введённых при регистрации
 * @param entryData
 */
export const checkRegistration = ({name, email, phone, password, confirm}) => {
    if (password !== confirm) throw new Error("Значения в поле пароля и подтверждения пароля не совпадают");


    return true;
};