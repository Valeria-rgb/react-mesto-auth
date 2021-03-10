import React from 'react';

function Login({onLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <section className="auth">
          <h1 className="auth__title">Вход</h1>
            <form
                className="auth__form"
                name ="login"
                noValidate>
                <input
                    className="auth__input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    isRequired={true}>
                </input>
                <input
                    className="auth__input"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    maxLength={30}>
                    isRequired={true}>
                </input>
            </form>
            <button>Войти</button>
        </section>
    );
}


import Form from "../Form/Form";
import Input from "../Input/Input";
import React from "react";

const Login = ({
                   onLogIn,
                   /*validatePassword,*/
                   submitButtonStateOfSending,
                   submitButtonErrorIndication
               }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fieldEmailError, setFieldEmailError] = React.useState(false);
    /*const [fieldPasswordError, setFieldPasswordError] = React.useState(false);*/
    const [isSubmitButtonActive, setIsSubmitButtonActive] = React.useState(false);

    const submitButtonClassName = ('form__button-submit form__button-submit_ident')
        + (!isSubmitButtonActive ? ' form__button-submit_disabled' : '')
        + (submitButtonErrorIndication ? ' form__button-submit_error' : '');

    React.useEffect(() => {
        if (fieldEmailError /*|| fieldPasswordError*/ || email === ''|| password === '')
            setIsSubmitButtonActive(false);
        else setIsSubmitButtonActive(true);
    }, [/*fieldPasswordError, */fieldEmailError, email, password]);

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        setFieldEmailError(!e.target.validity.valid);
    };

    const handleChangePassword = e => {
        setPassword(e.target.value);
        /*setFieldPasswordError(!validatePassword(e.target.value));*/
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogIn(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <section className="ident">
            <h1 className="ident__title">Вход</h1>
            <Form
                name='login'
                onSubmit={handleSubmit}
                submitButtonText={'Войти'}
                submitButtonClassName={submitButtonClassName}
                isSubmitButtonActive={isSubmitButtonActive}
                submitButtonErrorIndication={submitButtonErrorIndication}
                submitButtonStateOfSending={submitButtonStateOfSending}
            >
                <Input
                    parent="ident"
                    name="email"
                    type="email"
                    placeholder="Email"
                    isRequired={true}
                    onChange={handleChangeEmail}
                    value={email}
                    validError={fieldEmailError}
                    maxLength={50}
                    errorMessage="Некорректный email."
                />
                <Input
                    parent="ident"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    maxLength={30}
                    value={password}
                    onChange={handleChangePassword}
                    isRequired={true}
                    /*validError={fieldPasswordError}*/
                    errorMessage="Некорректный пароль."
                />
            </Form>
        </section>
    );
};

export default Login;