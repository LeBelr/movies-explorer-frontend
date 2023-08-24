import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import Popup from '../Popup/Popup';


export default function Navigation({ loggedIn }) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function openPopup() {
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
  }

  return (
    <>
      {!loggedIn ? (
        <nav className="navigation">
          <Link to="/" className="navigation__logo" />
          <div className="navigation__link-box">
            <Link to="/signup" className="navigation__link-signup hover-link">Регистрация</Link>
            <Link to="/signin" className="navigation__link-signin hover-button">Войти</Link>
          </div>
        </nav>
      ) : (
        <nav className="navigation">
          <div className="navigation__link-box">
            <Link to="/" className="navigation__logo" />
            <NavLink to="/movies" className={({ isActive }) => isActive ? "navigation__link navigation__link_active hover-link" : "navigation__link hover-link"}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "navigation__link navigation__link_active hover-link" : "navigation__link hover-link"}>Сохранённые фильмы</NavLink>
          </div>
          <Link to="/profile" className="navigation__link-profile hover-button">Аккаунт</Link>
          <button className="navigation__popup-button hover-button" type="button" onClick={openPopup}></button>
          <Popup isOpenPopup={isOpenPopup} onClose={closePopup} />
        </nav>
      )}
    </>
  )
}