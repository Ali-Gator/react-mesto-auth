import React, {useContext} from 'react';
import logo from '../images/header-logo-white.svg';
import {NavLink, Route, Switch} from 'react-router-dom';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Header() {
  const currentUser = useContext(CurrentUserContext);

  function signOut() {
    localStorage.removeItem('token');
  }

  return (
    <header className="page__header header">
      <img className="header__logo" src={logo} alt="Логотип Место"/>
      <div className="header__wrapper">
        <Switch>
          <Route path="/sign-up">
            <NavLink to="/sign-in" className="header__link">Войти</NavLink>
          </Route>
          <Route path="/sign-in">
            <NavLink to="/sign-up" className="header__link">Регистрация</NavLink>
          </Route>
          <Route path="/">
            <p className="header__text">{currentUser.email}</p>
            <NavLink onClick={signOut} to="/sign-in" className="header__link header__link_minor">Выйти</NavLink>
          </Route>
        </Switch>
      </div>
    </header>
  );
}
