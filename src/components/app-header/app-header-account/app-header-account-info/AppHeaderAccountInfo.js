import './app-header-account-info.scss'

import Avatar from './assets/img/avatar.png'

import {useDispatch, useSelector} from "react-redux";
import {selectUserInfo, selectUserLoading, logout} from "../../../../store/features/userSlice";
import Spinner from "../../../spinner/Spinner";

function AppHeaderAccountInfo({isMobile}) {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUserInfo)
    const userInfoLoading = useSelector(selectUserLoading)

    return (
        <div className="account-info">
            <div className="account-banner">
                {!userInfoLoading ?
                    <>
                        {isMobile ?
                            <>
                                <div className="account-banner__row">
                                    <span>Использовано компаний</span>
                                    <strong className="account-banner__value">
                                        {userInfo.usedCompanyCount}
                                    </strong>
                                </div>
                                <div className="account-banner__row">
                                    <span>Лимит по компаниям</span>
                                    <strong
                                        className="account-banner__value account-banner__value--green"
                                    >
                                        {userInfo.companyLimit}
                                    </strong>
                                </div>
                            </>
                            :
                            <>
                                <div className="account-banner__col">
                                    <span>Использовано компаний</span>
                                    <span>Лимит по компаниям</span>
                                </div>
                                <div className="account-banner__col">
                                    <span className="account-banner__value">{userInfo.usedCompanyCount}</span>
                                    <span
                                        className="account-banner__value account-banner__value--green"
                                    >
                                        {userInfo.companyLimit}
                                    </span>
                                </div>
                            </>
                        }
                    </>
                    : <Spinner></Spinner>}
            </div>

            {!isMobile &&
                <div className="account-personal">
                    <div className="account-personal__info">
                        <div className="account-personal__name">Алексей А.</div>
                        <button className="account-personal__btn" onClick={() => dispatch(logout())}>Выйти</button>
                    </div>

                    <img src={Avatar} className="account-personal__avatar"></img>
                </div>
            }
        </div>
    )
}

export default AppHeaderAccountInfo