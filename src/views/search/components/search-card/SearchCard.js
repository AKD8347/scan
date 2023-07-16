import './search-card.scss'

import api from "../../../../api";

import {Store} from "react-notifications-component";

import SearchForm from "./components/search-form/SearchForm";

import {useNavigate} from "react-router";

function SearchCard() {
    const navigate = useNavigate()

    const onSubmit = async ({inn, startDate, endDate, tonality}) => {
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
                    ]
                },
                tonality
            }
        }

        try {
            const response = await api.search.searchHistograms(data)
            console.log(response)
        } catch (e) {
            Store.addNotification({
                title: "Ошибка",
                message: e.response.data.message,
                type: "danger",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            })
        } finally {
            // TODO Replace it after the backend is working
            window.scrollTo(0, 0)
            navigate('/search-result')
        }
    }

    return (
        <div className="search-card">
            <SearchForm onSubmit={onSubmit}></SearchForm>
        </div>
    )
}

export default SearchCard