import './search-result-section.scss'

function SearchResultSection({title, subtitle, children}) {
    return <section className="search-result-section">
        <h2 className="search-result-section__title app-title">{title}</h2>
        {subtitle && <h3 className="search-result-section__subtitle">{subtitle}</h3>}

        <div className="search-result-section__content">
            {children}
        </div>
    </section>
}

export default SearchResultSection