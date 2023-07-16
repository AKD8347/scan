import './app-date-picker.scss'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {forwardRef} from "react";

function AppDatePicker(
    {
        label,
        value,
        placeholder,
        onChane,
        selectsStart,
        selectsEnd,
        startDate,
        endDate,
        minDate,
        maxDate,
    }
) {
    const DatePickerInput = forwardRef(({value, onClick}, ref) => (
        <input
            className="app-date-picker__inner"
            placeholder={placeholder}
            readOnly
            value={value}
            onClick={onClick}
            ref={ref}
        >
        </input>
    ))

    return <div className="app-date-picker">
        <label className="app-date-picker__content">
            <span className="app-date-picker__label" dangerouslySetInnerHTML={{__html: label}}></span>
            <DatePicker
                selected={value}
                onChange={onChane}
                selectsStart={selectsStart}
                selectsEnd={selectsEnd}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                maxDate={maxDate}
                popperPlacement="bottom"
                dateFormat="dd.MM.yyyy"
                customInput={<DatePickerInput/>}
            >
            </DatePicker>
        </label>
    </div>
}

export default AppDatePicker