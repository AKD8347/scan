import './search-result-docs.scss'

import SearchResultDocsCard from "./components/search-result-docs-card/SearchResultDocsCard";
import AppBtn from "../../../../components/app-btn/AppBtn";

import {getDocs} from "../../../../mock/search-result-docs";

import {useState} from "react";

function SearchResultDocs() {
    const [currentDocCount, setCurrentDocCount] = useState(10)
    const docsData = getDocs()
    const docs = docsData.data.slice(0, currentDocCount)

    const isShowBtn = currentDocCount < docsData.total

    const showMore = () => {
        setCurrentDocCount(currentDocCount + 10)
    }

    return <div className="search-result-docs">
        <div className="search-result-docs__content">
            {docs.map((doc, i) =>
                <SearchResultDocsCard key={i} data={doc}></SearchResultDocsCard>
            )}
        </div>

        {isShowBtn &&
            <AppBtn
                className="search-result-docs__btn"
                text="Показать больше"
                color="primary"
                onClick={showMore}
            >
            </AppBtn>
        }
    </div>
}

export default SearchResultDocs