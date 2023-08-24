import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button className="not-found__link hover-link" onClick={() => navigate(-1)}>Назад</button>
    </section>
  )
}