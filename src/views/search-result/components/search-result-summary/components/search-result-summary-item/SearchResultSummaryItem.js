import './search-result-summary-item.scss'

function SearchResultSummaryItem({data}) {
    return <div className="search-result-summary-item search-result-summary__column">
        <div className="search-result-summary-item__value">{new Date(data.date).toLocaleDateString()}</div>
        <div className="search-result-summary-item__value">{data.total}</div>
        <div className="search-result-summary-item__value">{data.risk}</div>
    </div>
}

export default SearchResultSummaryItem