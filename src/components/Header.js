import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {Link, useLocation} from "react-router-dom";

function Header({ loggedIn, onLogOut}) {
    const currentUser = React.useContext(CurrentUserContext);
    const location = useLocation();
    const currentPath = location.pathname;

    function handleLogOut() {
        onLogOut();
    }

    return (
        <header className="header">
            <div className="header__logo"/>
            { !loggedIn &&
            <nav className="navigation">
                    <Link to={currentPath === "/sign-in" ? "/sign-up" : "/sign-in"}
                          className="navigation__link">
                        {currentPath === "/sign-in" ? "Регистрация" : "Войти"}
                    </Link>
            </nav>
            }
            { loggedIn &&
            <nav className="navigation">
                <p className="navigation__email">{currentUser.email}</p>
                <button className="navigation__link" onClick={handleLogOut}>Выйти</button>
            </nav>}
        </header>
    );
}

export default Header;
