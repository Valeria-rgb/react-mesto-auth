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

export default Login;