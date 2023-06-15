import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__fact-list">
        <li>
          <h3 className="about-project__fact-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__fact-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="about-project__fact-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__fact-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__time-list">
        <li>
          <p className="about-project__time-backend">1 неделя</p>
          <p className="about-project__time-name">Back-end</p>
        </li>
        <li>
          <p className="about-project__time-frotend">4 недели</p>
          <p className="about-project__time-name">Front-end</p>
        </li>
      </ul>
    </section>
  )
}