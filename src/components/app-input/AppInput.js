import './app-input.scss'

import {Field} from 'react-final-form'

function AppInput({input, meta, label, placeholder, type}) {
    const classes = ['app-input']

    if (meta.invalid && meta.touched) {
        classes.push('app-input--invalid')
    }

    return <div className={classes.join(' ')}>
        <label className="app-input__content">
            <span
                className="app-input__label"
                dangerouslySetInnerHTML={{__html: label}}
            >
            </span>
            <input
                className="app-input__input"
                {...input}
                placeholder={placeholder}
                type={type}
            >
            </input>
        </label>

        {meta.invalid && meta.touched && <div className="app-input__message">{meta.error}</div>}
    </div>
}

export default function ({name, label, type, placeholder, validate}) {
    return (
        <Field name={name} validate={validate}>
            {({input, meta}) =>
                <AppInput
                    input={input}
                    meta={meta}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                >
                </AppInput>
            }
        </Field>
    )
}