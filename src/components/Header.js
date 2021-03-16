import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from "react";
import {Link, useLocation} from "react-router-dom";

function Header({ logged, onLogOut, email}) {
    const currentUser = React.useContext(CurrentUserContext);

    const location = useLocation();
    const currentPath = location.pathname;

    function handleLogOut() {
        onLogOut();
    }

    return (
        <header className="header">
            <div className="header__logo"/>
            { !logged &&
                    <Link to={currentPath === "/sign-in" ? "/sign-up" : "/sign-in"}
                          className="navigation__link">
                        {currentPath === "/sign-in" ? 'Регистрация' : 'Войти'}
                    </Link>
            }
            { logged && <nav className="navigation">
                <p className="navigation__email">{email}</p>
                <button className="navigation__link" onClick={handleLogOut}>Выйти</button>
            </nav>}
        </header>
    );
}

export default Header;
