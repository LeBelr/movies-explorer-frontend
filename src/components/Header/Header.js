import './Header.css';
import Navigation from '../Navigation/Navigation';

export default function Header({ isMain = false, loggedIn }) {
  return (
    <header className={`header ${isMain ? ("header_theme_dark-blue") : ""}`}>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}