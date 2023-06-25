import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register({ handleRegister }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
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
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid({ ...isValid, [name]: e.target.checkValidity() });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    handleRegister({
      name: values.name,
      email: values.email,
      password: values.password
    })
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
      <form className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="name">Имя</label>
          <input className={`register__input ${isValid.name ? "" : "register__input_type_error"}`} id="name" type="text" name="name" placeholder="Имя" value={values.name} onChange={handleChange} required minLength={2} maxLength={30}></input>
          <span className={`register__input-error ${isValid.name ? "" : ("register__input-error_active")}`}>{errors.name}</span>
        </fieldset>
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="email">E-mail</label>
          <input className={`register__input ${isValid.email ? "" : "register__input_type_error"}`} id="email" type="email" name="email" placeholder="E-mail" value={values.email} onChange={handleChange} required></input>
          <span className={`register__input-error ${isValid.email ? "" : ("register__input-error_active")}`}>{errors.email}</span>
        </fieldset>
        <fieldset className="register__input-box">
          <label className="register__label" htmlFor="password">Пароль</label>
          <input className={`register__input ${isValid.password ? "" : "register__input_type_error"}`} id="password" type="password" name="password" placeholder="Пароль" value={values.password} onChange={handleChange} required></input>
          <span className={`register__input-error ${isValid.password ? "" : ("register__input-error_active")}`}>{errors.password}</span>
        </fieldset>
        <button className="register__button hover-button" type="submit" disabled={!isButtonActive}>Зарегистрироваться</button>
        <p className="register__signin">Уже зарегистрированы? <Link to="/signin" className="register__signin-link hover-link">Войти</Link></p>
      </form>
    </section>
  )
}