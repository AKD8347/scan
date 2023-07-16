import {
    createBrowserRouter,
} from "react-router-dom";

import {RequireAuth, Guest} from "./protection-routes";

import Home from "../views/home/Home";
import Auth from "../views/auth/Auth";
import Search from "../views/search/Search";
import SearchResult from "../views/search-result/SearchResult";

import Default from "../layouts/Default";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                index: true,
                element: <Home/>
            },
            {
                path: '/auth',
                element: (
                    <Guest redirectTo="/">
                        <Auth/>
                    </Guest>
                )
            },
            {
                path: '/search',
                element: (
                    <RequireAuth redirectTo="/auth">
                        <Search/>
                    </RequireAuth>
                )
            },
            {
                path: '/search-result',
                element: (
                    <RequireAuth redirectTo="/auth">
                        <SearchResult/>
                    </RequireAuth>
                )
            }
        ]
    },
]);

export default router