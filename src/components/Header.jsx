import { NavLink } from 'react-router';
import { useState } from 'react';
import LoginModal from './LoginModal';

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const getLinkClassName = ({ isActive }) => {
    return isActive
      ? 'nav-link nav-link--active'
      : 'nav-link';
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="logo">
          Библиотека фильмов
        </NavLink>

        <nav className="navigation">
          <NavLink
            to="/"
            className={getLinkClassName}
          >
            Главная
          </NavLink>

          <NavLink
            to="/movies"
            className={getLinkClassName}
          >
            Фильмы
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;