import './search-result-docs.scss'

import SearchResultDocsCard from "./components/search-result-docs-card/SearchResultDocsCard";
import AppBtn from "../../../../components/app-btn/AppBtn";

import api from "../../../../api";

import {useEffect, useState} from "react";

function SearchResultDocs({docIds}) {
    const [currentDocCount, setCurrentDocCount] = useState(0)
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const ids = docIds.map(id => id.encodedId).slice(currentDocCount, currentDocCount + 10)
        if (ids.length) {
            loadDocs(ids)
        }
    }, [currentDocCount])

    const loadDocs = async (ids) => {
        const response = (await api.search.getDocs(ids)).map(doc => doc.ok)
        setDocs([...docs, ...response])
    }

    const isShowBtn = currentDocCount < docIds.length

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