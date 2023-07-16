import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import api from "../../api";

const accessToken = localStorage.getItem('accessToken') || null

const initialState = {
    loading: false,
    loggedIn: !!accessToken,
    accessToken,
    expire: null,
    eventFiltersInfo: {
        usedCompanyCount: null,
        companyLimit: null
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, {payload}) {
            return {
                loggedIn: true,
                ...payload
            }
        },
        logout() {
            localStorage.removeItem('accessToken')
            return {
                ...initialState,
                loggedIn: false,
                accessToken: ''
            }
        },
        setInfo(state, {payload}) {
            state.eventFiltersInfo = payload.eventFiltersInfo
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false
                state.eventFiltersInfo = action.payload.eventFiltersInfo
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const {logout} = userSlice.actions

// async actions
export const login = (data) => async (dispatch) => {
    const authData = await api.user.login(data)

    dispatch(userSlice.actions.login(authData))
    dispatch(fetchUser())

    localStorage.setItem('accessToken', authData.accessToken)
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    return await api.user.getInfo()
})

// select
export const selectUser = state => state.user
export const selectUserLoading = state => state.user.loading
export const selectUserInfo = state => state.user.eventFiltersInfo

export default userSlice.reducer