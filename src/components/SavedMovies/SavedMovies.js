import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

export default function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList isSavedMovie={true} />
      <Footer />
    </>
  )
}