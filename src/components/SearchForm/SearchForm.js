import './SearchForm.css';

export default function SearchForm() {
  return (
    <section aria-label="Поле поиска фильма">
      <form className="search-form">
        <div className="search-form__input-box">
          <input className="search-form__input" type="text" name="movie" placeholder="Фильм" required />
          <button className="search-form__button hover-button" type="submit" />
        </div>
        <div className="search-form__checkbox-box">
          <input className="search-form__checkbox" id="short-movie" type="checkbox" name="short-movie" />
          <label className="search-form__checkbox-label" htmlFor="short-movie">Короткометражки</label>
        </div>
      </form>
    </section>
  )
}