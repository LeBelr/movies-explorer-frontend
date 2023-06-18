import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false
  });
  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
    setError({ ...error, [name]: e.target.validationMessage });
    setIsValid({ ...isValid, [name]: e.target.checkValidity() });
  }

  useEffect(() => {
    if (isValid.email && isValid.password) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isValid.email, isValid.password]);

  return (
    <section className="login">
      <Link to="/" className="login__logo" />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <fieldset className="login__input-box">
          <label className="login__label" htmlFor="email">E-mail</label>
          <input className={`login__input ${isValid.email ? "" : "login__input_type_error"}`} id="email" type="email" name="email" placeholder="E-mail" onChange={handleChange} required></input>
          <span className={`login__input-error ${isValid.email ? "" : "login__input-error_active"}`}>{error.email}</span>
        </fieldset>
        <fieldset className="login__input-box">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className={`login__input ${isValid.password ? "" : "login__input_type_error"}`} id="password" type="password" name="password" placeholder="Пароль" value={value.password} onChange={handleChange} required></input>
          <span className={`login__input-error ${isValid.password ? "" : "login__input-error_active"}`}>{error.password}</span>
        </fieldset>
        <button className="login__button hover-button" type="submit" disabled={isButtonActive ? null : "disabled"}>Войти</button>
        <p className="login__signin">Ещё не зарегистрированы? <Link to="/signup" className="login__signin-link hover-link">Регистрация</Link></p>
      </form>
    </section>
  )
}