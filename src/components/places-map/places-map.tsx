type PlaceMapProps = {
  activeCard: string;
};

const PlacesMap = ({activeCard}: PlaceMapProps):JSX.Element => (
  <div className="cities__right-section">
    <section className="cities__map map" data-tag={activeCard}></section>
  </div>
);

export default PlacesMap;
