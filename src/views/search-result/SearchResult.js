import './search-result.scss'

import SearchResultImg from './assets/img/search-result-img.png'
import SearchResultSection from "./components/search-result-section/SearchResultSection";
import SearchResultSummary from "./components/search-result-summary/SearchResultSummary";
import SearchResultDocs from "./components/search-result-docs/SearchResultDocs";

function SearchResult() {
    return <div className="search-result-page">
        <div className="search-result-page__header">
            <div className="search-result-page__header-column">
                <h1 className="search-result-page__title app-title">Ищем. Скоро <br></br> будут результаты</h1>
                <h3 className="search-result-page__subtitle app-subtitle">
                    Поиск может занять некоторое время, просим сохранять терпение.
                </h3>
            </div>

            <img src={SearchResultImg} className="search-result-page__img"></img>
        </div>

        <SearchResultSection title="Общая сводка" subtitle="Найдено 4 221 вариантов">
            <SearchResultSummary></SearchResultSummary>
        </SearchResultSection>

        <SearchResultSection title="Список документов">
            <SearchResultDocs></SearchResultDocs>
        </SearchResultSection>
    </div>
}

export default SearchResult