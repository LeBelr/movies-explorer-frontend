import './SearchForm.css';
import searchImage from '../../images/search-form-icon.svg'

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__input-box">
        <img src={searchImage} className="search-form__image" alt="Поиск" />
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм" required />
        <button className="search-form__button hover-button" type="submit" />
      </div>
      <div className="search-form__checkbox-box">
        <input className="search-form__checkbox" id="short-movie" type="checkbox" name="short-movie" />
        <label className="search-form__checkbox-label" htmlFor="short-movie">Короткометражки</label>
      </div>
    </form>
  )
}