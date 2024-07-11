import Main from '../../pages/main/main';
import { City, SortType } from '../../const';

type AppProps = {
  city: typeof City;
  sortType: typeof SortType;
};

const App = ({ city, sortType }: AppProps):JSX.Element => (
  <main>
    <Main
      city={ city }
      sortType={ sortType }
    />
  </main>
);

export default App;
