import './auth-card.scss'

import LoginForm from "./components/login-form/LoginForm";
import AuthCardTab from "./components/auth-card-tab/AuthCardTab";

import GoogleLogin from './assets/img/google.png'
import FacebookLogin from './assets/img/facebook.png'
import YandexLogin from './assets/img/yandex.png'

import AuthImg from './assets/img/img.png'

import {useState} from "react";

const tabs = [
    {
        id: 0,
        title: 'Войти',
        Component: LoginForm
    },
    {
        id: 1,
        title: 'Зарегистрироваться',
        Component: LoginForm
    }
]

function AuthCard() {
    const [ActiveTab, setActiveTab] = useState(tabs[0])

    return <div className="auth-card">
        <img src={AuthImg} className="auth-card__img"></img>

        <div className="auth-card__tabs">
            {
                tabs.map(tab =>
                    <AuthCardTab
                        tab={tab}
                        key={tab.id}
                        activeTabId={ActiveTab.id}
                        onClick={() => setActiveTab(tab)}
                    >
                    </AuthCardTab>
                )
            }
        </div>

        <div className="auth-card__content">
            <ActiveTab.Component></ActiveTab.Component>
        </div>

        <div className="auth-card__footer">
            <div className="auth-card__text">Войти через:</div>
            <div className="auth-card__login-items">
                <a className="auth-card__login-item" href="#">
                    <img src={GoogleLogin}></img>
                </a>
                <a className="auth-card__login-item" href="#">
                    <img src={FacebookLogin}></img>
                </a>
                <a className="auth-card__login-item" href="#">
                    <img src={YandexLogin}></img>
                </a>
            </div>
        </div>
    </div>
}

export default AuthCard