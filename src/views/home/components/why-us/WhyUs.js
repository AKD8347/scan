import './why-us.scss'

import WhyUsItems from "./components/why-us-items/WhyUsItems";

import WhyUsImg from './assets/img/why-us-img.png'

function WhyUs() {
    return <div className="why-us">
        <h2 className="app-title why-us__title">Почему именно мы</h2>
        <WhyUsItems></WhyUsItems>

        <img src={WhyUsImg} className="why-us__img"></img>
    </div>
}

export default WhyUs