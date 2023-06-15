import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__box">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <a href="https://practicum.yandex.ru" className="footer__link hover-link" target="blank">Яндекс.Практикум</a>
          </li>
          <li>
            <a href="https://github.com/LeBelr" className="footer__link hover-link" target="blank">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}