import AppInput from "../../../../../../components/app-input/AppInput";
import {composeValidators, inn, numOfDocInIssue, required} from "../../../../../../utils/validators";
import AppSelect from "../../../../../../components/app-select/AppSelect";
import AppDatePicker from "../../../../../../components/app-date-picker/AppDatePicker";
import AppCheckbox from "../../../../../../components/app-checkbox/AppCheckbox";
import AppBtn from "../../../../../../components/app-btn/AppBtn";
import {Form} from "react-final-form";
import {useState} from "react";

const tonalities = [
    {value: "any", label: "Любая"},
    {value: 'negative', label: 'Негативная'},
    {value: 'positive', label: 'Позитивная'}
];

function SearchForm({onSubmit}) {
    const [tonality, setTonality] = useState(tonalities[0])
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [checked7, setChecked7] = useState(false)

    const onSubmitHandler = (values) => {
        const data = {
            inn: values.inn,
            tonality: tonality.value,
            limit: values.limit,
            startDate,
            endDate
        }

        onSubmit(data)
    }

    return <Form
        onSubmit={onSubmitHandler}
        render={({handleSubmit, invalid, submitting}) => {
            const disabled = invalid || submitting || !startDate || !endDate

            return <form className="search-card__form" onSubmit={handleSubmit}>
                <div className="search-card__column">
                    <div className="search-card__field">
                        <AppInput
                            name="inn"
                            label="ИНН компании <strong>*</strong>"
                            validate={composeValidators(required, inn)}
                            placeholder="10 цифр"
                        >
                        </AppInput>
                    </div>
                    <div className="search-card__field">
                        <AppSelect
                            options={tonalities}
                            label="Тональность"
                            value={tonality}
                            onChange={setTonality}
                        >
                        </AppSelect>
                    </div>
                    <div className="search-card__field">
                        <AppInput
                            name="limit"
                            label="Количество документов в выдаче <strong>*</strong>"
                            validate={composeValidators(required, numOfDocInIssue)}
                            placeholder="от 1 до 1000"
                        >
                        </AppInput>
                    </div>
                    <div className="search-card__field search-card__field--date">
                        <label>
                            <span className="search-card__field-label">
                                Диапазон поиска <strong>*</strong>
                            </span>
                            <div>
                                <AppDatePicker
                                    placeholder="Дата начала"
                                    value={startDate}
                                    onChane={setStartDate}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    maxDate={new Date()}
                                >
                                </AppDatePicker>

                                <AppDatePicker
                                    placeholder="Дата конца"
                                    value={endDate}
                                    onChane={setEndDate}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    maxDate={new Date()}
                                >
                                </AppDatePicker>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="search-card__column">
                    <div className="search-card__checkboxes">
                        <AppCheckbox
                            value={checked1}
                            onChange={setChecked1}
                            label="Признак максимальной полноты"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked2}
                            onChange={setChecked2}
                            label="Упоминания в бизнес-контексте"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked3}
                            onChange={setChecked3}
                            label="Главная роль в публикации"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked4}
                            onChange={setChecked4}
                            label="Публикации только с риск-факторами"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked5}
                            onChange={setChecked5}
                            label="Включать технические новости рынков"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked6}
                            onChange={setChecked6}
                            label="Включать анонсы и календари"
                        >
                        </AppCheckbox>
                        <AppCheckbox
                            value={checked7}
                            onChange={setChecked7}
                            label="Включать сводки новостей"
                        >
                        </AppCheckbox>
                    </div>

                    <div className="search-card__btn-wrapper">
                        <AppBtn
                            className="search-card__btn"
                            text="Поиск"
                            type="submit"
                            color="primary"
                            disabled={disabled}
                        >
                        </AppBtn>

                        <div className="search-card__info-text">* Обязательные к заполнению поля</div>
                    </div>
                </div>
            </form>
        }}
    >
    </Form>
}

export default SearchForm