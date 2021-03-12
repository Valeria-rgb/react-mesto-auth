import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from "react";
import {Link, useLocation} from "react-router-dom";

function Header({ logged}) {
    const currentUser = React.useContext(CurrentUserContext);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="header">
            <div className="header__logo"/>

            { logged && <nav className="navigation">
                <p className="navigation__email">{currentUser.email}</p>
                <button className="navigation__link">Выйти</button>
            </nav>}
            { !logged && <nav className="navigation">

                    <Link to={currentPath === "/sign-in" ? "/sign-up" : "/sign-in"}
                          className="navigation__link">
                        {currentPath === "/sign-in" ? 'Регистрация' : 'Войти'}
                    </Link>
            </nav>}
        </header>
    );
}

export default Header;
