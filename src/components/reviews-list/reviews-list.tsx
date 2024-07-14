import { Review } from '../../types';
import ReviewForm from '../review-form/review-form';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewItem = ({review}:{review: Review}) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={ review.user.avatarUrl }
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name"> { review.user.name } </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: '80%' }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        { review.comment }
      </p>
      <time className="reviews__time" dateTime="2019-04-24">
        April 2019
      </time>
    </div>
  </li>
);


const ReviewsList = ({reviews}:ReviewsListProps): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">1</span>
    </h2>
    <ul className="reviews__list">
      { reviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      )) }
    </ul>
    <ReviewForm />
  </section>
);

export default ReviewsList;
