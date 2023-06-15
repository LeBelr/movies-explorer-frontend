import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-box">
          <a className="portfolio__link hover-link" href="https://github.com/LeBelr/how-to-learn.git" target="blank">Статичный сайт</a>
          <a href="https://github.com/LeBelr/how-to-learn.git" className="portfolio__arrow-link hover-link" target="blank"></a>
        </li>
        <li className="portfolio__link-box">
          <a className="portfolio__link hover-link" href="https://lebelr.github.io/russian-travel/" target="blank">Адаптивный сайт</a>
          <a href="https://lebelr.github.io/russian-travel/" className="portfolio__arrow-link hover-link" target="blank"></a>
        </li>
        <li className="portfolio__link-box">
          <a href="https://mst.nomoredomains.monster" className="portfolio__link hover-link" target="blank">Одностраничное приложение</a>
          <a href="https://mst.nomoredomains.monster" className="portfolio__arrow-link hover-link" target="blank"></a>
        </li>
      </ul>
    </section>
  )
}