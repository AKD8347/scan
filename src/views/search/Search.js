import './search.scss'

import SearchCard from "./components/search-card/SearchCard";

import SearchImg from './assets/img/search-img.png'
import SearchImg1 from './assets/img/search-img1.png'
import SearchImg2 from './assets/img/search-img2.png'

function Search() {
    return <div className="search-page">
        <div className="search-page__column">
            <h1 className="search-page__title app-title">Найдите необходимые данные в пару кликов.</h1>
            <h3 className="search-page__subtitle app-subtitle">
                Задайте параметры поиска. <br></br> Чем больше заполните, тем точнее поиск
            </h3>

            <SearchCard></SearchCard>
        </div>

        <img src={SearchImg} className="search-page__img"></img>
        <img src={SearchImg1} className="search-page__img1"></img>
        <img src={SearchImg2} className="search-page__img2"></img>
    </div>
}

export default Search