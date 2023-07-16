import './app-select.scss'

import Select from "react-select";

function AppSelect({value, onChange, options, label}) {
    const customStyles = {
        control: (defaultStyles) => ({
            ...defaultStyles,
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            paddingLeft: '10px',
            height: '44px',
            fontSize: '16px',
            border: '1px solid #C7C7C7 !important',
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
        }),
    };

    return <div className="app-select">
        <label className="app-select__content">
            <span className="app-select__label">{label}</span>
            <Select
                className="app-select__inner"
                value={value}
                onChange={onChange}
                options={options}
                styles={customStyles}
            >
            </Select>
        </label>
    </div>
}

export default AppSelect