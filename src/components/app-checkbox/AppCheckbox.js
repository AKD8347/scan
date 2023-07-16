import './app-checkbox.scss'

import CheckIcon from '../../assets/img/check.png'

function AppCheckbox({value, onChange, label}) {
    return (
        <label className={`app-checkbox ${value ? "app-checkbox--active" : ""}`}>
            <input
                type="checkbox"
                onChange={() => onChange(!value)}
            />
            <span className="app-checkbox__box">
                  <img src={CheckIcon} className="app-checkbox__check"></img>
            </span>
            {label}
        </label>
    );
}

export default AppCheckbox