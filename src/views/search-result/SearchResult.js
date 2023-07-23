import './search-result.scss'

import SearchResultImg from './assets/img/search-result-img.png'
import SearchResultSection from "./components/search-result-section/SearchResultSection";
import SearchResultSummary from "./components/search-result-summary/SearchResultSummary";
import SearchResultDocs from "./components/search-result-docs/SearchResultDocs";

import {useSelector} from "react-redux";
import {selectSearchData} from "../../store/features/searchSlice";

import {useEffect} from "react";

import {useNavigate} from "react-router";
import notify from "../../utils/notify";

function SearchResult() {
    const navigate = useNavigate()
    const {searching, searchData} = useSelector(selectSearchData)
    const subtitle = searchData.summary.length ?
        `Найдено ${searchData.summary.length.toLocaleString()} вариантов` :
        ''

    useEffect(() => {
        if (!searching && !searchData.summary.length) {
            setTimeout(() => {
                notify('Ошибка', 'Ничего не найдено', 'danger')
                navigate('/search')
            })
        }
    }, [searching, searchData])

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

        <SearchResultSection title="Общая сводка" subtitle={subtitle}>
            <SearchResultSummary summary={searchData.summary} searching={searching}></SearchResultSummary>
        </SearchResultSection>

        {!searching &&
            <SearchResultSection title="Список документов">
                <SearchResultDocs docIds={searchData.ids}></SearchResultDocs>
            </SearchResultSection>
        }
    </div>
}

export default SearchResult