import React from 'react';
import {NavLink} from 'react-router-dom';

const Register = () => {

  return (
    <main className="auth page__auth auth_type_register">
      <form className="auth__form" method="post">
        <h2 className="auth__heading">Регистрация</h2>
        <div className="auth__input-wrapper">
          <input className="auth__input" placeholder="Email" required type="email"/>
        </div>
        <div className="auth__input-wrapper">
          <input className="auth__input" maxLength="20" minLength="8" placeholder="Пароль" required type="password"/>
        </div>
        <button className="auth__save-button">Зарегистрироваться</button>
      </form>
      <p className="auth__text">Уже зарегистрированы?
        <NavLink to="/sign-in" className="auth__link" href=""> Войти</NavLink>
      </p>
    </main>
  );
};

export default Register;
