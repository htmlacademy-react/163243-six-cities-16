import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () : JSX.Element => (
  <div>
    <Helmet>
      <title>6 Cities. Not found</title>
    </Helmet>
    <h1>404 Not Found</h1>
    <Link to="/"> Go to main page</Link>
  </div>
);

export default NotFound;
