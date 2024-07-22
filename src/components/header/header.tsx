import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';


const isLoggedIn = false;

const LoggedUser = (): JSX.Element => (
  <ul className="header__nav-list">
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Favorites }>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </Link>
    </li>
    <li className="header__nav-item">
      <Link className="header__nav-link" to={ AppRoute.Main }>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  </ul>
);

const NotLoggedUser = (): JSX.Element => (
  <ul className="header__nav-list">
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Login }>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  </ul>
);

const Header = ():JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <nav className="header__nav">
          {isLoggedIn ? <LoggedUser /> : <NotLoggedUser />}
        </nav>
      </div>
    </div>
  </header>
);
export default Header;
