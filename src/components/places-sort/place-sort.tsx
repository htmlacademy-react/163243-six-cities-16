import { Sort } from '../../types';

type PlacesSortProps = {
  sort: Sort;
};

const SortTypeItem = ({ sort }: { sort: string }):JSX.Element => (
  <li className="places__option places__option--active" tabIndex={0}>{sort}</li>
);

const PlacesSort = ({ sort }: PlacesSortProps):JSX.Element => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(sort).map((sortTypeItem) => (
        <SortTypeItem key={sortTypeItem} sort={sortTypeItem} />
      ))}
    </ul>
  </form>
);

export default PlacesSort;
