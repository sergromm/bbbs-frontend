import PropTypes from "prop-types";
import { useState } from "react";

function AuthForm({ onLogin }) {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (evt) => {
    setLogin(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      name="formAuthorization"
      className="form form_content_authorization"
    >
      <h2 className="form__title">Вход</h2>
      <p className="form__text">
        Вход в личный кабинет доступен наставникам программы «Старшие Братья
        Старшие Сёстры».
      </p>
      <p className="form__text">
        Пожалуйста, введите логин и пароль из письма. Если вам не приходило
        письмо, свяжитесь с вашим куратором.
      </p>
      <input
        type="text"
        className="form__input"
        name="login"
        placeholder="Логин"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        className="form__input"
        name="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <a className="form__restore-password" href="/restore-account">
        Забыли пароль?
      </a>
      <button className="form__submit" type="submit" name="submitAuthorization">
        Войти
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AuthForm;
