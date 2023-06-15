import './MoviesCard.css';
import image from '../../images/main-promo.svg';

export default function MoviesCard({ isSavedMovie }) {
  return (
    <li className="movie-card">
      <img className="movie-card__image" src={image} alt="Постер" />
      <div className="movie-card__like-box">
        <p className="movie-card__name">Фильм</p>
        <button className={`movie-card__like hover-button movie-card__like_active ${isSavedMovie ? ("movie-card__like_type_delete") : ("")}`} type="button"></button>
      </div>
      <p className="movie-card__duration">1ч 47м</p>
    </li>
  )
}