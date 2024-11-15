import SearchInputBox from "./search/SearchInputBox";
import SearchBtn from "../../buttons/SearchBtn";
import UnknownAccUntSvg from "../../svg/UnknownAccountSvg";
import {useState} from "react";
import AccountButton from "./accaunt/AccountButton";

/**
 * Блок хэдэра с поиском и личным кабинетом
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderUserInterface = () => {
    const [searchLine, setSearchLine] = useState("");

    return (
        <div className="header__user-interface">
            <div className="header__icons">
                <SearchBtn setSearchLine={setSearchLine} searchLine={searchLine}/>
                <SearchInputBox setSearchLine={setSearchLine} searchLine={searchLine}/>
                <AccountButton/>
            </div>
        </div>
    );
};

export default HeaderUserInterface;