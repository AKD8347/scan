import AppHeaderAccountAuth from "./app-header-account-auth/AppHeaderAccountAuth";
import AppHeaderAccountInfo from "./app-header-account-info/AppHeaderAccountInfo";

import {useSelector} from "react-redux";
import {selectUser} from "../../../store/features/userSlice";

function AppHeaderAccount({isMobile}) {
    const {loggedIn} = useSelector(selectUser)


    return loggedIn ?
        <AppHeaderAccountInfo isMobile={isMobile}></AppHeaderAccountInfo> :
        <AppHeaderAccountAuth isMobile={isMobile}></AppHeaderAccountAuth>
}

export default AppHeaderAccount