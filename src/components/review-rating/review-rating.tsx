import { Rating } from '../../const';


type ReviewRatingStarProps = {
  title: string;
  stars: number;
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReviewRatingStar = ({title, stars, onRadioChange}: ReviewRatingStarProps): JSX.Element => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      defaultValue={stars}
      id={`${stars}-stars`}
      type="radio"
      onChange={ onRadioChange }
    />
    <label
      htmlFor={`${stars}-stars`}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>
);

const ReviewRating = ({onRadioChange}:{onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void}): JSX.Element => (
  <div className="reviews__rating-form form__rating">
    {Rating.map((rating) => (
      ReviewRatingStar({...rating, onRadioChange})
    ))}
  </div>
);

export default ReviewRating;
