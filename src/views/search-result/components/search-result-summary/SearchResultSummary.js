import './search-result-summary.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import SearchResultSummaryItem from "./components/search-result-summary-item/SearchResultSummaryItem";

import {useRef} from "react";

import {ReactComponent as ArrowLeft} from '../../../../assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../../../assets/img/arrow-right.svg'

function SearchResultSummary() {
    const swiper = useRef()

    const items = [
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        },
        {
            date: Date.now(),
            summary: 5,
            risks: 0
        }
    ]

    const slidesPerView = items.length > 8 ? 8 : items.length
    const breakpoints = {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: slidesPerView - 5
        },
        900: {
            slidesPerView: slidesPerView - 3
        },
        1100: {
            slidesPerView: slidesPerView - 2
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

            <Swiper
                className="search-result-summary__content"
                ref={swiper}
                slidesPerView={slidesPerView} s
                paceBetween={20}
                breakpoints={breakpoints}
            >
                {items.map((item, i) =>
                    <SwiperSlide key={i}>
                        <SearchResultSummaryItem data={item}></SearchResultSummaryItem>
                    </SwiperSlide>
                )}
            </Swiper>
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