import './app-header-burger-menu.scss'

import {useState} from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {selectUser} from "../../../store/features/userSlice";

function AppHeaderBurgerMenu({onChange}) {
    const [isOpen, setIsOpen] = useState(false)
    const {loggedIn} = useSelector(selectUser)

    const classes = ['app-header-burger-menu']

    if (isOpen) {
        classes.push('app-header-burger-menu--open')
        document.body.style.overflowY = 'hidden'
        window.scrollTo(0, 0)
    } else {
        document.body.style.overflowY = 'auto'
    }

    const onClickBurger = () => {
        const open = !isOpen
        setIsOpen(open)
        onChange(open)
    }

    return <div className={classes.join(' ')}>
        <button className="app-header-burger" onClick={onClickBurger}>
            <div className="app-header-burger__line"></div>
            <div className="app-header-burger__line"></div>
            <div className="app-header-burger__line"></div>
        </button>

        <div className="mobile-menu">
            <div className="mobile-menu__wrapper">
                <div className="mobile-menu__menu">
                    <ul>
                        <li><Link to="/" onClick={onClickBurger}>Главная</Link></li>
                        <li><Link to="#" onClick={onClickBurger}>Тарифы</Link></li>
                        <li><Link to="#" onClick={onClickBurger}>FAQ</Link></li>
                    </ul>
                </div>

                {!loggedIn &&
                    <div className="mobile-menu__footer">
                        <Link className="mobile-menu__label" to="/auth"
                              onClick={onClickBurger}>Зарегистрироваться</Link>
                        <Link className="mobile-menu__btn" to="/auth" onClick={onClickBurger}>Войти</Link>
                    </div>
                }
            </div>

        </div>
    </div>
}

export default AppHeaderBurgerMenu