import './AboutMe.css';
import myPhoto from '../../images/main-promo.svg';

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-box">
        <div>
          <p className="about-me__subtitle">Алексей</p>
          <p className="about-me__direction">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__description">Я родился и живу в Перми, закончил Химико-Технологический факультет ПНИПУ. Год в свобоное время изучал программирование на легке. Потом появился шанс получить бесплатное обучение, которым я и воспользовался.</p>
          <a href="https://github.com/LeBelr" className="about-me__link hover-link" target="blank">Github</a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фотография меня"></img>
      </div>
    </section >
  )
}