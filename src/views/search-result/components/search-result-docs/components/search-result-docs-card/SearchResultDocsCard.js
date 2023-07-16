import './search-result-docs-card.scss'

function SearchResultDocsCard({data}) {
    return <div className="search-result-docs-card">
        <div className="search-result-docs-card__header">
            <span>{new Date(data.date).toLocaleDateString()}</span>
            <a href="#">{data.link}</a>
        </div>
        <div className="search-result-docs-card__title">{data.title}</div>
        <div className="search-result-docs-card__category">{data.category}</div>
        <img src={data.img} className="search-result-docs-card__img"></img>
        <p className="search-result-docs-card__text">{data.text}</p>
        <div className="search-result-docs-card__footer">
            <button className="search-result-docs-card__btn">Читать в источнике</button>
            <span className="search-result-docs-card__words">{data.wordCount.toLocaleString()} слова</span>
        </div>
    </div>
}

export default SearchResultDocsCard