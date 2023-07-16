import './app-header.scss'

import {ReactComponent as Logo} from '../../assets/img/logo.svg'
import {ReactComponent as LogoWhite} from '../../assets/img/logo-white.svg'

import AppHeaderAccount from "./app-header-account/AppHeaderAccount";

import {Link} from "react-router-dom";

import {useState} from "react";

import useWindowDimensions from "../../hooks/window-dimensions";
import AppHeaderBurgerMenu from "./app-header-burger-menu/AppHeaderBurgerMenu";

function AppHeader() {
    const {width} = useWindowDimensions()
    const isMobile = width <= 700

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const classes = ['app-header']
    if (isOpenMenu) {
        classes.push('app-header--menu--open')
    }

    return (
        <header className={classes.join(' ')}>
            <div className="app-header__inner">
                <Link to="/" className="app-header__logo-wrapper">
                    <Logo className="app-header__logo"></Logo>
                </Link>
                {isMobile &&
                    <Link to="/" className="app-header__logo-wrapper app-header__logo-wrapper--white">
                        <LogoWhite className="app-header__logo"></LogoWhite>
                    </Link>
                }

                {!isMobile && <nav className="app-header__menu">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="#">Тарифы</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                    </ul>
                </nav>}

                <div className="app-header__right">
                    <AppHeaderAccount isMobile={isMobile}></AppHeaderAccount>
                    {isMobile && <AppHeaderBurgerMenu onChange={setIsOpenMenu}></AppHeaderBurgerMenu>}
                </div>
            </div>
        </header>
    )
}

export default AppHeader