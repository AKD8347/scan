import './rates-item.scss'

import CheckMark from './assets/img/check-mark.png'
import AppBtn from "../../../../../components/app-btn/AppBtn";

function RatesItem({rate}) {
    const btnConfig = {
        text: 'Подробнее',
        color: 'primary'
    }

    if (rate.isCurrentRate) {
        btnConfig.text = 'Перейти в личный кабинет'
        btnConfig.color = ''
    }

    return <div className="rate-item">
        <div className="rate-item__header">
            <span className="rate-item__title">{rate.title}</span>
            <span className="rate-item__subtitle">{rate.subtitle}</span>

            <img src={rate.img} className="rate-item__img"></img>
        </div>

        <div className="rate-item__content">

            {rate.isCurrentRate &&
                <div className="rate-item__label">Текущий тариф</div>
            }

            <div className="rate-item__body">
                <div className="rate-item__prices-wrapper">
                    <div className="rate-item__prices">
                        <span className="rate-item__price">{rate.price.toLocaleString()} ₽</span>
                        <span className="rate-item__original-price">{rate.originalPrice.toLocaleString()} ₽</span>
                    </div>

                    <div className="rate-item__text">{rate.installmentPlanText}</div>
                </div>

                <div className="rate-item__info">
                    <span className="rate-item__info-title">В тариф входит:</span>

                    <ul className="rate-item__info-items">
                        {rate.tariffContent.map((tariffContentItem, i) =>
                            <li className="rate-item__info-item" key={i}>
                                <img src={CheckMark}></img>
                                <span className="rate-item__text">{tariffContentItem}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <AppBtn
                text={btnConfig.text}
                className="rate-item__btn"
                color={btnConfig.color}
            >
            </AppBtn>
        </div>
    </div>
}

export default RatesItem