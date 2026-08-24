import { NavLink } from "react-router";

function Header(){
  function getLinkClass({isActive}){
    return isActive
      ? "nav-link nav-link--active"
      : "nav-link"; 
  }


  return(
    <header className="header">
      <NavLink
        className="logo"
        to="/"
      >
         Movie Library
      </NavLink>

      <nav className="navigation">
        <NavLink
          className={getLinkClass}
          to="/"
          end
        >
          Главная
        </NavLink>

        <NavLink
          className={getLinkClass}
          to="/movies"
        >
          Фильмы
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;