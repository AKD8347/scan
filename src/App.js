import './App.scss';

import router from "./router";

import {
    RouterProvider,
} from "react-router-dom";

import AppHeader from "./components/app-header/AppHeader";
import AppFooter from "./components/app-footer/AppFooter";

function App() {
    return <RouterProvider router={router}></RouterProvider>
}

export default App;
