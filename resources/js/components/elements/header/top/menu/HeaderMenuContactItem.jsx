const HeaderMenuContactItem = ({link, title, icon}) => {
    return (
        <a href={link} className="header-menu__contacts-link">
            {icon}
            <p>{title}</p>
        </a>
    );
};

export default HeaderMenuContactItem;