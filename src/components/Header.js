function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <nav className="navigation">
                <p className="navigation__email">lera.shapranova@ya.ru</p>
                <button className="navigation__logout">Выйти</button>
            </nav>
        </header>
    );
}

export default Header;