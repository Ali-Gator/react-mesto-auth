import React from 'react';

const Login = () => {

  return (
    <main className="auth page__auth auth_type_register">
      <form className="auth__form" method="post">
        <h2 className="auth__heading">Вход</h2>
        <div className="auth__input-wrapper">
          <input className="auth__input" placeholder="Email" required type="email"/>
        </div>
        <div className="auth__input-wrapper">
          <input className="auth__input" maxLength="20" minLength="8" placeholder="Пароль" required type="password"/>
        </div>
        <button className="auth__save-button">Войти</button>
      </form>
    </main>
  );
};

export default Login;
