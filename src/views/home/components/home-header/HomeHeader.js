import './home-header.scss'

import AppBtn from "../../../../components/app-btn/AppBtn";

import HomeImg from "./assets/img/img.png";

import {useSelector} from "react-redux";
import {selectUser} from "../../../../store/features/userSlice";

function HomeHeader() {
    const {loggedIn} = useSelector(selectUser)

    return <div className="home-header">
        <div className="home-header__content">
            <h1 className="home-header__title app-title">
                сервис по поиску публикаций <br></br> о компании <br></br> по его ИНН
            </h1>

            <h3 className="home-header__subtitle app-subtitle">
                Комплексный анализ публикаций, получение данных в формате PDF на
                электронную почту.
            </h3>

            {loggedIn &&
                <AppBtn
                    className="home-header__btn"
                    text="Запросить данные"
                    to="/search"
                    color="primary"
                >
                </AppBtn>
            }
        </div>

        <img src={HomeImg} className="home-header__img"></img>
    </div>
}

export default HomeHeader