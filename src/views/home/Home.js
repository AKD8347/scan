import './home.scss'

import HomeHeader from "./components/home-header/HomeHeader";
import WhyUs from "./components/why-us/WhyUs";
import Rates from "./components/rates/Rates";

function Home() {
    return (
        <div className="home">
            <HomeHeader></HomeHeader>
            <WhyUs></WhyUs>
            <Rates></Rates>
        </div>
    )
}

export default Home