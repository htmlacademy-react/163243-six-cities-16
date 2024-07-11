import { SortType } from '../../const';

type PlacesSortProps = {
  sortType: typeof SortType;
};

const SortTypeItem = ({ sortType }: { sortType: string }):JSX.Element => (
  <li className="places__option places__option--active" tabIndex={0}>{sortType}</li>
);

const PlacesSort = ({ sortType }: PlacesSortProps):JSX.Element => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(sortType).map((sortTypeItem) => (
        <SortTypeItem key={sortTypeItem} sortType={sortTypeItem} />
      ))}
    </ul>
  </form>
);

export default PlacesSort;
