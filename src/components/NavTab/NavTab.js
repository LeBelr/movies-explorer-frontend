import './NavTab.css';

export default function NavTab() {
  return (
    <nav>
      <ul className="nav-tab__links">
        <li >
          <a href="#about-project" className="nav-tab__link hover-link">О проекте</a>
        </li>
        <li>
          <a href="#techs" className="nav-tab__link hover-link">Технологии</a>
        </li>
        <li>
          <a href="#about-me" className="nav-tab__link hover-link">Студент</a>
        </li>
      </ul>
    </nav>
  )
}