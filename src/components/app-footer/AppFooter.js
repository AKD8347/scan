import './app-footer.scss'

import FooterLogo from '../../assets/img/footer-logo.png'

function AppFooter() {
    return (
        <footer className="app-footer">
            <img src={FooterLogo} className="app-footer__logo"></img>
            <div className="app-footer__content">
                <div className="app-footer__content-primary">
                    <div className="app-footer__content-item">г. Москва, Цветной б-р, 40</div>
                    <div className="app-footer__content-item">+7 495 771 21 11</div>
                    <a href="mailto:info@skan.ru" className="app-footer__content-item">info@skan.ru</a>
                </div>

                <div className="app-footer__content-item">Copyright. 2022</div>
            </div>
        </footer>
    )
}

export default AppFooter