import store from "../../store";
import {Navigate} from "react-router-dom";

export function RequireAuth({children, redirectTo}) {
    const {user: {loggedIn}} = store.getState()
    return loggedIn ? children : <Navigate to={redirectTo}/>;
}

export function Guest({children, redirectTo}) {
    const {user: {loggedIn}} = store.getState()
    return loggedIn ? <Navigate to={redirectTo}/> : children;
}