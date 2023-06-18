import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ isSavedMovie }) {
  return (
    <section className={`movies-cards ${isSavedMovie ? "movies-cards_type_saved" : ""}`} aria-label="Список фильмов">
      <ul className="movies-cards__list">
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
      </ul>
      {isSavedMovie ? "" : (<button className="movies-cards__button hover-button" type="button">Ещё</button>)}
    </section>
  )
}