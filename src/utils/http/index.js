import { Axios } from './Axios'

function createAxios() {
    return new Axios({
        baseURL: process.env.REACT_APP_BACKEND_HOST,
    })
}

export default createAxios()
