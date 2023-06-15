import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ isSavedMovie }) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
        <MoviesCard isSavedMovie={isSavedMovie} />
      </ul>
      <button className="movies-cards__button hover-button" type="button">Ещё</button>
    </section>
  )
}