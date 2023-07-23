import './search-card.scss'

import SearchForm from "./components/search-form/SearchForm";

import {useNavigate} from "react-router";

import {useDispatch} from "react-redux";
import {fetchHistogramsData} from "../../../../store/features/searchSlice";

function SearchCard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = async ({inn, startDate, endDate, tonality, limit}) => {
        console.log(limit)

        const data = {
            issueDateInterval: {
                startDate,
                endDate
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: 'company',
                            inn: +inn
                        }
                    ],
                    tonality
                }
            },
            intervalType: 'month',
            histogramTypes: [
                'totalDocuments',
                'riskFactors'
            ],
            limit: +limit
        }

        dispatch(fetchHistogramsData(data))
        navigate('/search-result')
        window.scrollTo(0, 0)
    }

    return (
        <div className="search-card">
            <SearchForm onSubmit={onSubmit}></SearchForm>
        </div>
    )
}

export default SearchCard