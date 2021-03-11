import React from 'react';

function Login({onLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

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
                    value={email}
                    isRequired={true}
                    onChange={changeEmail}>
                </input>
                <input
                    className="auth__input"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    maxLength={30}
                    isRequired={true}
                    onChange={changePassword}>
                </input>
            </form>
            <button
                className="auth__submit"
                type="submit"
                onSubmit={handleSubmit}>Войти</button>
        </section>
    );
}

export default Login;