import './search-result-summary.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import SearchResultSummaryItem from "./components/search-result-summary-item/SearchResultSummaryItem";

import {useRef} from "react";

import {ReactComponent as ArrowLeft} from '../../../../assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../../../assets/img/arrow-right.svg'
import Spinner from "../../../../components/spinner/Spinner";

function SearchResultSummary({summary, searching}) {
    const swiper = useRef()

    const slidesPerView = summary.length > 8 ? 8 : summary.length
    const breakpoints = {
        0: {
            slidesPerView: 1
        },
        // 3
        600: {
            slidesPerView: slidesPerView > 3 ? 3 : slidesPerView
        },
        // 5
        900: {
            slidesPerView: slidesPerView > 5 ? 5 : slidesPerView
        },
        // 6
        1100: {
            slidesPerView: slidesPerView > 6 ? 6 : slidesPerView
            // slidesPerView: 6
        },
        1300: {
            slidesPerView: slidesPerView
        },
    }

    const changeSlide = (direction) => {
        if (direction === 'left') {
            swiper.current.swiper.slidePrev()
        } else {
            swiper.current.swiper.slideNext()
        }
    }

    return <div className="search-result-summary">
        <button
            className="search-result-summary__navigation search-result-summary__navigation--left"
            onClick={() => changeSlide('left')}
        >
            <ArrowLeft></ArrowLeft>
        </button>

        <div className="search-result-summary__content-wrapper">
            <div className="search-result-summary__header search-result-summary__column">
                <div className="search-result-summary__header-item">Период</div>
                <div className="search-result-summary__header-item">Всего</div>
                <div className="search-result-summary__header-item">Риски</div>
            </div>

            {searching ?
                <Spinner
                    className="search-result-summary__content search-result-summary__spinner"
                    title="Загружаем данные"
                >
                </Spinner> :
                <Swiper
                    className="search-result-summary__content"
                    ref={swiper}
                    slidesPerView={slidesPerView}
                    paceBetween={20}
                    breakpoints={breakpoints}
                >
                    {summary.map((item, i) =>
                        <SwiperSlide key={i}>
                            <SearchResultSummaryItem data={item}></SearchResultSummaryItem>
                        </SwiperSlide>
                    )}
                </Swiper>}
        </div>

        <button
            className="search-result-summary__navigation search-result-summary__navigation--right"
            onClick={() => changeSlide('right')}
        >
            <ArrowRight></ArrowRight>
        </button>
    </div>
}

export default SearchResultSummary