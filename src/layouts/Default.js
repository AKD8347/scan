import AppHeader from "../components/app-header/AppHeader";
import {Outlet} from "react-router-dom";
import AppFooter from "../components/app-footer/AppFooter";

function Default() {
    return (
        <div className="main-wrapper">
            <AppHeader></AppHeader>

            <div className="main-wrapper__content">
                <Outlet></Outlet>
            </div>

            <AppFooter></AppFooter>
        </div>
    )
}

export default Default