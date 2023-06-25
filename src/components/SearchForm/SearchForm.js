import { useEffect, useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ handleShowMovie, isSavedMovie }) {
  const [movieName, setMovieName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleChangeMovieName(e) {
    setMovieName(e.target.value);
    setIsValid(e.target.checkValidity());
  }

  function handleChangeChecked(e) {
    setIsChecked(e.target.checked);
    handleShowMovie(movieName, !isChecked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleShowMovie(movieName, isChecked);
  }

  useEffect(() => {
    setError('');
    if (!isSavedMovie && localStorage.getItem('movieName')) {
        setMovieName(localStorage.getItem('movieName'));
        setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
        setIsValid(true);
    }
  }, [])

  useEffect(() => {
    if (!isValid) {
      setError('Нужно ввести ключевое слово');
    }
  }, [isValid]);



  return (
    <section aria-label="Поле поиска фильма">
      <form className="search-form" noValidate onSubmit={handleSubmit}>
        <div className="search-form__input-box">
          <input className="search-form__input" type="text" name="movie" placeholder="Фильм" required value={movieName} onChange={handleChangeMovieName} />
          <button className="search-form__button hover-button" disabled={!isValid} type="submit" />
          <span className={isValid ? ("search-form__input-error") : ("search-form__input-error search-form__input-error_active")}>{error}</span>
        </div>
        <div className="search-form__checkbox-box">
          <input className="search-form__checkbox" id="short-movie" type="checkbox" name="short-movie" checked={Boolean(isChecked)} onChange={handleChangeChecked} disabled={!isValid} />
          <label className="search-form__checkbox-label" htmlFor="short-movie">Короткометражки</label>
        </div>
      </form>
    </section>
  )
}