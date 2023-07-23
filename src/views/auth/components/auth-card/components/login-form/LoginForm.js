import './login-form.scss'

import {composeValidators, required, loginOrPhone} from "../../../../../../utils/validators";

import {useNavigate} from "react-router";

import AppInput from "../../../../../../components/app-input/AppInput";
import AppBtn from "../../../../../../components/app-btn/AppBtn";
import {Form} from 'react-final-form'

import {useDispatch} from "react-redux";
import {login} from "../../../../../../store/features/userSlice";

import notify from "../../../../../../utils/notify";

function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = async (formData) => {
        try {
            await dispatch(login(formData))
            navigate('/')
        } catch (e) {
            notify('Ошибка', 'Неверный логин или пароль', 'danger')
        }
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, invalid, submitting}) => {
                return <form className="login-form" onSubmit={handleSubmit}>
                    <AppInput
                        label="Логин или номер телефона:"
                        name="login"
                        validate={composeValidators(required, loginOrPhone)}
                    >
                    </AppInput>

                    <AppInput
                        label="Пароль:"
                        name="password"
                        type="password"
                        validate={required}
                    >
                    </AppInput>

                    <AppBtn
                        className="login-form__btn"
                        type="submit"
                        color="primary"
                        text="Войти"
                        disabled={submitting || invalid}
                    >
                    </AppBtn>

                    <div className="login-form__recovery-password">Восстановить пароль</div>
                </form>
            }}
        >
        </Form>
    )
}

export default LoginForm