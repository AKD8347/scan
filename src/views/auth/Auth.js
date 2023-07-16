import './auth.scss'

import AuthImg from './assets/img/auth-img.png'

import AuthCard from "./components/auth-card/AuthCard";

import useWindowDimensions from "../../hooks/window-dimensions";

function Auth() {
    const {width} = useWindowDimensions()
    const isMobile = width <= 900

    return <div className="auth-page">
        <div className="auth-page__column">
            <h1 className="app-title auth-page__title">
                Для оформления подписки на тариф, необходимо авторизоваться.
            </h1>

            {!isMobile && <img src={AuthImg} className="auth-page__img"></img>}
        </div>
        <AuthCard></AuthCard>

        {isMobile && <img src={AuthImg} className="auth-page__img"></img>}
    </div>
}

export default Auth