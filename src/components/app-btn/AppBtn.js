import './app-btn.scss'

import {useNavigate} from "react-router";

function AppBtn({className, text, color, type, disabled, to, onClick}) {
    const navigate = useNavigate()
    const classes = ['app-btn']

    if (className) {
        classes.push(className)
    }

    if (color) {
        classes.push(`app-btn--${color}`)
    }

    const onClickHandler = () => {
        if (to) {
            navigate(to)
        }

        if (onClick) {
            onClick()
        }
    }

    return (
        <button
            className={classes.join(' ')}
            type={type}
            disabled={disabled}
            onClick={onClickHandler}
        >
            {text}
        </button>
    )
}

export default AppBtn