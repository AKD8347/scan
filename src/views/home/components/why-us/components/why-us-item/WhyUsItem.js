import './why-us-item.scss'

function WhyUsItem({card}) {
    return <div className="why-us-card">
        <img src={card.img} className="why-us-card__img"></img>
        <span className="why-us-card__text">{card.text}</span>
    </div>
}

export default WhyUsItem