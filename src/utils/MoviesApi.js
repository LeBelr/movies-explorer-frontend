import { getRes } from './MainApi';
import { MOVIES_API_URL } from './apiUrls';

export function getMovies() {
  return fetch(`${MOVIES_API_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(getRes)
}