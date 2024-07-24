import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFound = () : JSX.Element => (
  <div>
    <Helmet>
      <title>6 Cities. Not found</title>
    </Helmet>
    <h1>404 Not Found</h1>
    <Link to={ AppRoute.Main }> Go to main page</Link>
  </div>
);

export default NotFound;
