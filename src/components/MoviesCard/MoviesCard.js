import './MoviesCard.css';
import image from '../../images/main-promo.svg';

export default function MoviesCard({ isSavedMovie }) {
  return (
    <li className="movie-card">
      <img className="movie-card__image" src={image} alt="Постер" />
      <div className="movie-card__like-box">
        <h2 className="movie-card__name">Фильм movie-card__like hover-button movie-card__like_active Фильм movie-card__like hover-button movie-card__like_activeФильм movie-card__like hover-button movie-card__like_activeФильм movie-card__like hover-button movie-card__like_activeФильм movie-card__like hover-button movie-card__like_activeФильм movie-card__like hover-button movie-card__like_activeФильм movie-card__like hover-button movie-card__like_active</h2>
        <button className={`movie-card__like hover-button movie-card__like_active ${isSavedMovie ? ("movie-card__like_type_delete") : ("")}`} type="button"></button>
      </div>
      <p className="movie-card__duration">1ч 47м</p>
    </li>
  )
}