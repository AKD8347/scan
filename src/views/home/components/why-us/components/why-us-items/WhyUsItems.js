import './why-us-items.scss'
import 'swiper/css';

import Card1Img from './assets/img/card1-img.png'
import Card2Img from './assets/img/card2-img.png'
import Card3Img from './assets/img/card3-img.png'

import {ReactComponent as ArrowLeft} from '../../../../../../assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../../../../../assets/img/arrow-right.svg'

import {useRef} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import WhyUsItem from "../why-us-item/WhyUsItem";

const cards = [
    {
        img: Card1Img,
        text: 'Высокая и оперативная скорость обработки заявки'
    },
    {
        img: Card2Img,
        text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
    },
    {
        img: Card3Img,
        text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
    },
    {
        img: Card3Img,
        text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
    }
]

function WhyUsItems() {
    let swiper = useRef()

    const breakpoints = {
        300: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }

    const changeSlide = (direction) => {
        if (direction === 'left') {
            swiper.current.swiper.slidePrev()
        } else {
            swiper.current.swiper.slideNext()
        }
    }

    return (
        <div className="why-us-items">
            <div className="why-us-items__navigation">
                <ArrowLeft onClick={() => changeSlide('left')}></ArrowLeft>
            </div>

            <Swiper
                className="why-us-items"
                ref={swiper}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={breakpoints}
            >
                {cards.map((card, i) =>
                    <SwiperSlide key={i}>
                        <WhyUsItem card={card}></WhyUsItem>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className="why-us-items__navigation">
                <ArrowRight onClick={() => changeSlide('right')}></ArrowRight>
            </div>
        </div>
    )
}

export default WhyUsItems