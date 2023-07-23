import {configureStore} from '@reduxjs/toolkit'

import userSlice from "./features/userSlice";
import searchSlice from "./features/searchSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        search: searchSlice
    },
})