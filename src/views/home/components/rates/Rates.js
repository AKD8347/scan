import './rates.scss'

import BeginnerImg from './assets/img/beginner.png'
import ProImg from './assets/img/pro.png'
import BusinessImg from './assets/img/business.png'
import RatesItem from "./components/RatesItem";

const rates = [
    {
        title: 'Beginner',
        subtitle: 'Для небольшого исследования',
        img: BeginnerImg,
        price: 799,
        originalPrice: 1200,
        installmentPlanText: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        tariffContent: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
        isCurrentRate: true
    },
    {
        title: 'Pro',
        subtitle: 'Для HR и фрилансеров',
        img: ProImg,
        price: 1299,
        originalPrice: 2600,
        installmentPlanText: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        tariffContent: ['Все пункты тарифа Beginner', 'Экспорт истории', 'Рекомендации по приоритетам'],
        isCurrentRate: false
    },
    {
        title: 'Business',
        subtitle: 'Для корпоративных клиентов',
        img: BusinessImg,
        price: 2379,
        originalPrice: 3700,
        tariffContent: ['Все пункты тарифа Pro', 'Безлимитное количество запросов', 'Приоритетная поддержка'],
        isCurrentRate: false
    }
]

function Rates() {
    return <div className="rates">
        <h2 className="rates__title app-title">наши тарифы</h2>
        <div className="rates__items">
            {rates.map((rate, i) =>
                <RatesItem
                    rate={rate}
                    key={i}
                >
                </RatesItem>
            )}
        </div>
    </div>
}

export default Rates