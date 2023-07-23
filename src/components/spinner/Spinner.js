import './spinner.scss'

import {ReactComponent as SpinnerIcon} from '../../assets/img/spinner.svg'

function Spinner({className, title}) {
    const classes = ['spinner-wrapper']
    if (className) {
        classes.push(className)
    }

    return <div className={classes.join(' ')}>
        <div className="spinner-inner">
            <SpinnerIcon className="spinner"></SpinnerIcon>
            <span className="spinner-inner__title">{title}</span>
        </div>
    </div>
}

export default Spinner