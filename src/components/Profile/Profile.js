import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import Header from '../Header/Header';

export default function Profile({ handleLogout, loggedIn, handleEditProfile, isOk }) {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({
    name: '',
    email: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  })
  const [isValid, setIsValid] = useState({
    name: true,
    email: true
  })
  const [isRes, setIsRes] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid({ ...isValid, [name]: e.target.checkValidity() });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleEditProfile({
      name: values.name,
      email: values.email
    })
    setIsRes(true);
    setIsButtonActive(false);
  }

  useEffect(() => {
    setIsRes(false);
  }, [])

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser])

  useEffect(() => {
    if ((isValid.email && isValid.name && values.email !== currentUser.email) || (isValid.email && isValid.name && values.name !== currentUser.name)) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [values.email, values.name]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile" onSubmit={handleSubmit}>
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__form">
            <div className="profile__input-box">
              <label className="profile__input-label" htmlFor="name">Имя</label>
              <input className="profile__input" id="name" type="text" name="name" placeholder="Имя" required value={values.name || ''} onChange={handleChange} minLength={2} maxLength={30}></input>
              <span className={`profile__input-error ${isValid.name ? "" : "profile__input-error_active"}`}>{errors.name}</span>
            </div>
            <div className="profile__input-box">
              <label className="profile__input-label" htmlFor="email">E-mail</label>
              <input className="profile__input" id="email" name="email" placeholder="E-mail" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required value={values.email || ''} onChange={handleChange}></input>
              <span className={`profile__input-error ${isValid.email ? "" : "profile__input-error_active"}`}>{errors.email}</span>
            </div>
            {isRes ? (<span className="profile__resolve">{isOk ? ("Изменения сохранены") : ("Что-то пошло не так")}</span>) : ("")}
            <button className={isButtonActive ? ("profile__button hover-button") : ("profile__button")} type="submit" disabled={!isButtonActive} onClick={handleSubmit}>Редактировать</button>
            <button className="profile__button hover-button" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
          </form>
        </section>
      </main >
    </>
  )
}