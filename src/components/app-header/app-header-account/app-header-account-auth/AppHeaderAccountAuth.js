import './app-header-account-auth.scss'

import {Link} from "react-router-dom";

function AppHeaderAccountAuth({isMobile}) {
    return !isMobile ?
        (
            <div className="account-auth">
                <Link to="/auth" className="account-auth__btn">Зарегистрироваться</Link>
                <div className="account-auth__delim"></div>
                <Link to="/auth" className="account-auth__btn account-auth__btn--primary">Войти</Link>
            </div>
        )
        : null
}

export default AppHeaderAccountAuth