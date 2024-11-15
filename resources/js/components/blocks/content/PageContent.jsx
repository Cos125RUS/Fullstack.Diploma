/**
 * Содержимое активной страницы аккаунта
 * @returns {*}
 * @constructor
 */
const PageContent = ({pageClassName, children}) => {
    let className = "account__page";
    if (pageClassName) {
        className += ` ${pageClassName}`;
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default PageContent;