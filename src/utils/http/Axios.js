import axios from 'axios'
import store from "../../store";
import router from "../../router";

import {logout} from "../../store/features/userSlice";
import {useNavigate} from "react-router";

export class Axios {
    axiosInstance;

    constructor(options) {
        this.axiosInstance = axios.create(options)

        this.setupInterceptors()
    }

    setupInterceptors() {
        this.axiosInstance.interceptors.request.use(config => {
            const {user: {loggedIn, accessToken}} = store.getState()

            if (loggedIn) {
                config.headers['Authorization'] = `Bearer ${accessToken}`
            }

            return config
        })

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401 && !error.config.url.includes('login')) {
                    store.dispatch(logout())
                    router.navigate('/')
                }

                return Promise.reject(error)
            },
        )
    }

    get(config) {
        return this.request({
            ...config,
            method: 'GET',
        })
    }

    post(config) {
        return this.request({
            ...config,
            method: 'POST',
        })
    }

    put(config) {
        return this.request({
            ...config,
            method: 'PUT',
        })
    }

    delete(config) {
        return this.request({
            ...config,
            method: 'DELETE',
        })
    }

    async request(config) {
        const data = await this.axiosInstance.request(config)
        return data.data
    }
}
