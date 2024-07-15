import Main from '../../pages/main/main';
import { City, Sort } from '../../types';

type AppProps = {
  city: City;
  sortType: Sort;
};

const App = (props: AppProps):JSX.Element => (
  <main>
    <Main
      city={ props.city }
      sort={ props.sortType }
    />
  </main>
);

export default App;
