import './Profile.css';
import Header from '../Header/Header';

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, Алексей!</h1>
          <form className="profile__form">
            <div className="profile__input-box">
              <label className="profile__input-label" htmlFor="name">Имя</label>
              <input className="profile__input" id="name" type="text" name="name" placeholder="Имя" required></input>
            </div>
            <div className="profile__input-box">
              <label className="profile__input-label" htmlFor="email">E-mail</label>
              <input className="profile__input" id="email" type="email" name="email" placeholder="E-mail" required></input>
            </div>
              <button className="profile__button hover-button" type="submit">Редактировать</button>
              <button className="profile__button hover-button" type="button">Выйти из аккаунта</button>
          </form>
        </section>
      </main>
    </>


  )
}