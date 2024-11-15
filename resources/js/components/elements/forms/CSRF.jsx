/**
 * CSRF-токен
 * @returns {JSX.Element}
 * @constructor
 */
const CSRF = () => {
    return (
        // eslint-disable-next-line no-undef
        <input type="hidden" name="CSRF" value={"csrf_token"}/>
    );
};

export default CSRF;