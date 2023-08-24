import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login({ handleLogin }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
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
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid({ ...isValid, [name]: e.target.checkValidity() });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    handleLogin({
      email: values.email,
      password: values.password
    })
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
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset className="login__input-box">
          <label className="login__label" htmlFor="email">E-mail</label>
          <input className={`login__input ${isValid.email ? "" : "login__input_type_error"}`} id="email" name="email" placeholder="E-mail" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={values.email} onChange={handleChange} required></input>
          <span className={`login__input-error ${isValid.email ? "" : "login__input-error_active"}`}>{errors.email}</span>
        </fieldset>
        <fieldset className="login__input-box">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className={`login__input ${isValid.password ? "" : "login__input_type_error"}`} id="password" type="password" name="password" placeholder="Пароль" value={values.password} onChange={handleChange} required></input>
          <span className={`login__input-error ${isValid.password ? "" : "login__input-error_active"}`}>{errors.password}</span>
        </fieldset>
        <button className="login__button hover-button" type="submit" disabled={!isButtonActive}>Войти</button>
        <p className="login__signin">Ещё не зарегистрированы? <Link to="/signup" className="login__signin-link hover-link">Регистрация</Link></p>
      </form>
    </section>
  )
}