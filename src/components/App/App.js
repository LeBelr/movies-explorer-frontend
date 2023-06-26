import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import handleMovieModel from '../../utils/movieModel';
import * as movieApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moreMovies, setMoreMovies] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));

  const navigate = useNavigate();
  const location = useLocation();

  // Функция для установки количества фильмов в Movies
  function handleCountMovie() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (windowWidth >= 1280) {
      setMovies(foundMovies.slice(0, 12));
      setMoreMovies(3);
    }
    if (windowWidth > 480 && windowWidth < 1280) {
      setMovies(foundMovies.slice(0, 8));
      setMoreMovies(2);
    }
    if (windowWidth <= 480) {
      setMovies(foundMovies.slice(0, 5));
      setMoreMovies(2);
    }
    if (!foundMovies) {
      setMoreMovies(0);
    }
  }

  // Функция для показа фильмов при нажатии "Ещё" в Movies
  function handleShowMore() {
    setMovies(foundMovies.slice(0, movies.length + moreMovies));
  }

  // Функция для поиска фильмов в Movies
  function handleShowMovie(movieName, isChecked) {
    if (!localStorage.getItem('allMovies')) {
      setIsLoading(true);
      movieApi.getMovies()
        .then((movies) => {
          const modelMovies = movies.map(handleMovieModel);
          const filterMovies = modelMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
          const filterShortMovies = isChecked ? (filterMovies.filter((item) => item.duration <= 40)) : filterMovies;
          localStorage.setItem('allMovies', JSON.stringify(modelMovies));
          localStorage.setItem('movieName', movieName);
          localStorage.setItem('foundMovies', JSON.stringify(filterShortMovies));
          localStorage.setItem('isChecked', isChecked);
          setAllMovies(modelMovies);
          setIsLoading(false);
          handleCountMovie();
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        })
    } else {
      const filterMovies = allMovies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()));
      const filterShortMovies = isChecked ? (filterMovies.filter((item) => item.duration <= 40)) : filterMovies;
      localStorage.setItem('movieName', movieName);
      localStorage.setItem('foundMovies', JSON.stringify(filterShortMovies));
      localStorage.setItem('isChecked', isChecked);
      handleCountMovie();
    }
  }

  function handleRegister(data) {
    mainApi.register(data)
      .then(() => {
        const email = data.email;
        const password = data.password;
        handleLogin({ email, password });
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(data) {
    mainApi.login(data)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
          mainApi.getMyInfo()
            .then((data) => {
              setCurrentUser(data);
            })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  function checkToken() {
    const token = localStorage.getItem('token');
    mainApi.checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate(location.pathname);
          mainApi.getMyInfo()
            .then((data) => {
              setCurrentUser(data);
            })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleEditProfile(data) {
    mainApi.editProfile(data)
      .then((data) => {
        setCurrentUser(data);
        setIsOk(true);
      })
      .catch((err) => {
        console.log(err);
        setIsOk(false);
        mainApi.getMyInfo()
          .then((data) => {
            setCurrentUser(data);
          })
      })
  }

  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // Функция для отображения лайков
  function isSaved(movie) {
    return savedMovies.some(item => JSON.stringify(item.movieId) === movie.movieId);
  }

  function handleSaveMovie(data) {
    mainApi.saveMovie(data)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteMovie(movie) {
    let id;
    if (movie._id) {
      id = movie._id;
    } else {
      const deleteMovie = savedMovies.find(item => String(item.movieId) === movie.movieId);
      id = deleteMovie._id;
    }
    mainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkToken();
      getSavedMovies();
    }
    if (localStorage.getItem('allMovies')) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    }
    if (localStorage.getItem('foundMovies')) {
      handleCountMovie();
    }
  }, [])

  window.addEventListener('resize', () => {
    setWindowWidth(document.documentElement.clientWidth);
  })

  useEffect(() => {
    if (!foundMovies) {
      return
    }
    if (movies.length === foundMovies.length) {
      setMoreMovies(0)
    }
  }, [movies, foundMovies])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={
            <Main
              loggedIn={loggedIn}
            />}
          />
          <Route path="/movies" element={
            <ProtectedRoute
              component={Movies}
              movies={movies}
              handleShowMovie={handleShowMovie}
              isLoading={isLoading}
              moreMovies={moreMovies}
              handleShowMore={handleShowMore}
              loggedIn={loggedIn}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isSaved={isSaved}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              component={SavedMovies}
              movies={savedMovies}
              loggedIn={loggedIn}
              handleDeleteMovie={handleDeleteMovie}
              isSaved={isSaved}
            />}
          />
          <Route path="/profile" element={
            <ProtectedRoute
              component={Profile}
              handleEditProfile={handleEditProfile}
              handleLogout={handleLogout}
              loggedIn={loggedIn}
              isOk={isOk}
            />}
          />
          <Route path="/signup" element={loggedIn ? <Navigate to="/" replace /> : <Register handleRegister={handleRegister} />} />
          <Route path="/signin" element={loggedIn ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
