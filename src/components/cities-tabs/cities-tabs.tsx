import { City } from '../../types';

type CitiesTabsProps = {
  cities: typeof City;
};

const CitiesTabItem = ({ city }: {city: string}):JSX.Element => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>
);

const CitiesTabs = ({ cities }: CitiesTabsProps):JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(cities).map((city) => (
          <CitiesTabItem key={city} city={city} />
        ))}
      </ul>
    </section>
  </div>
);

export default CitiesTabs;
