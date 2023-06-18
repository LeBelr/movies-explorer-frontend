import { Link } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-box">
          <Link to="*" className="portfolio__link hover-link">Статичный сайт</Link>
        </li>
        <li className="portfolio__link-box">
          <Link to="*" className="portfolio__link hover-link">Адаптивный сайт</Link>
        </li>
        <li className="portfolio__link-box">
          <Link to="*" className="portfolio__link hover-link">Одностраничное приложение</Link>
        </li>
      </ul>
    </section>
  )
}