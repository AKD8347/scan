import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import api from "../../api";

const initialState = {
    searching: false,
    searchData: {
        summary: [],
        ids: []
    },
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchHistogramsData.pending, (state, action) => {
                state.searching = true
            })
            .addCase(fetchHistogramsData.fulfilled, (state, action) => {
                state.searching = false
                state.searchData = action.payload
            })
            .addCase(fetchHistogramsData.rejected, (state, action) => {
                state.searching = false
            })
    }
})

export const fetchHistogramsData = createAsyncThunk(
    'search/fetchHistogramsData',
    async (data) => {
        const promises = [
            api.search.searchHistograms(data),
            api.search.searchObject(data)
        ]

        const responseData = await Promise.all(promises)

        const result = {
            summary: [],
            ids: responseData[1].items
        }

        responseData[0].data[0].data.forEach((totalData, i) => {
            const risk = responseData[0].data[1].data[i].value
            result.summary.push({
                total: totalData.value,
                risk,
                date: totalData.date
            })
        })

        return result
    })

// select
export const selectSearchData = state => state.search

export default searchSlice.reducer