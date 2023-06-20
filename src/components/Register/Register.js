import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState({
    name: false,
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
    if (isValid.name && isValid.email && isValid.password) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isValid.name, isValid.email, isValid.password]);

  return (
    <section className="register">
      <Link to="/" className="register__logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="name">Имя</label>
          <input className={`register__input ${isValid.name ? "" : "register__input_type_error"}`} id="name" type="text" name="name" placeholder="Имя" value={value.name} onChange={handleChange} required></input>
          <span className={`register__input-error ${isValid.name ? "" : ("register__input-error_active")}`}>{error.name}</span>
        </fieldset>
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="email">E-mail</label>
          <input className={`register__input ${isValid.email ? "" : "register__input_type_error"}`} id="email" type="email" name="email" placeholder="E-mail" value={value.email} onChange={handleChange} required></input>
          <span className={`register__input-error ${isValid.email ? "" : ("register__input-error_active")}`}>{error.email}</span>
        </fieldset>
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="password">Пароль</label>
          <input className={`register__input ${isValid.password ? "" : "register__input_type_error"}`} id="password" type="password" name="password" placeholder="Пароль" value={value.password} onChange={handleChange} required></input>
          <span className={`register__input-error ${isValid.password ? "" : ("register__input-error_active")}`}>{error.password}</span>
        </fieldset>
        <button className="register__button hover-button" type="submit" disabled={isButtonActive ? null : "disabled"}>Зарегистрироваться</button>
        <p className="register__signin">Уже зарегистрированы? <Link to="/signin" className="register__signin-link hover-link">Войти</Link></p>
      </form>
    </section>
  )
}