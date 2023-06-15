import './Techs.css';

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <p className="techs__subtitle">7 технологий</p>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs_technology">HTML</li>
        <li className="techs_technology">CSS</li>
        <li className="techs_technology">JS</li>
        <li className="techs_technology">React</li>
        <li className="techs_technology">Git</li>
        <li className="techs_technology">Express.js</li>
        <li className="techs_technology">mongoDB</li>
      </ul>
    </section>
  )
}