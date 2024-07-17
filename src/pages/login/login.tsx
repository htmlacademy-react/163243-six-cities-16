import LoginForm from '../../components/login-form/login-form';
import LoginLocation from '../../components/login-location/login-location';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';

const Login = ():JSX.Element => (
  <div className="page page--gray page--login">
    <Helmet>
      <title>6 Cities. Sign in</title>
    </Helmet>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <LoginForm />
        <LoginLocation />
      </div>
    </main>
  </div>
);

export default Login;
