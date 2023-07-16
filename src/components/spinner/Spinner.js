import './spinner.scss'

import {ReactComponent as SpinnerIcon} from '../../assets/img/spinner.svg'

function Spinner() {
    return <div className="spinner-wrapper">
        <div className="spinner-inner">
            <SpinnerIcon className="spinner"></SpinnerIcon>
        </div>
    </div>
}

export default Spinner