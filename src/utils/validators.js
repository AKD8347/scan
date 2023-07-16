export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value) =>
    value ? undefined : 'Обязательное поле'


export const email = (value) =>
    value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? undefined : 'Невалидный email'

export const phone = (value) =>
    /^\+7\d{10}$/.test(value.replaceAll(' ', '')) ? undefined : 'Неверный номер телефона'


export const loginOrPhone = (value) => {
    return value.length > 5 ? undefined : 'Введите корректные данные'
}

export const inn = (value) => {
    return Number.isInteger(+value) && value.length === 10 ? undefined : 'Введите корректные данные'
}
