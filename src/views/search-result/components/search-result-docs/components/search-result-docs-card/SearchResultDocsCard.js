import './search-result-docs-card.scss'

function SearchResultDocsCard({data}) {
    const attributes = data.attributes
    const category = attributes.isTechNews ?
        'Технические новости' :
        attributes.isAnnouncement ?
            'Анонсы и события' :
            'Сводки ноовостей'

    return <div className="search-result-docs-card">
        <div className="search-result-docs-card__header">
            <span>{new Date(data.issueDate).toLocaleDateString()}</span>
            <a href={data.url} target="_blank">{data.source.name}</a>
        </div>

        <div className="search-result-docs-card__title">{data.title.text}</div>

        <div className="search-result-docs-card__category">{category}</div>

        <img src={data.img} className="search-result-docs-card__img"></img>

        <p className="search-result-docs-card__text" dangerouslySetInnerHTML={{__html: data.content.markup}}></p>

        <div className="search-result-docs-card__footer">
            <a href={data.url} target="_blank" className="search-result-docs-card__btn">Читать в источнике</a>
            <span className="search-result-docs-card__words">{attributes.wordCount.toLocaleString()} слова</span>
        </div>
    </div>
}

export default SearchResultDocsCard