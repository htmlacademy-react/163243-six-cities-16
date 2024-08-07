import { useState } from 'react';

import { REVIEW_COMMENT_LIMIT } from '../../const';

import ReviewRating from '../review-rating/review-rating';

import { FormState } from '../../types';

const ReviewForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormState>({
    rating: '',
    comment: '',
  });

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.defaultValue;
    setFormData({
      ...formData,
      rating: value
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRating onRadioChange={handleChangeRadio}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          const value = event.target.value;
          setFormData({
            ...formData,
            comment: value
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{ REVIEW_COMMENT_LIMIT } characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formData.comment.length > REVIEW_COMMENT_LIMIT && formData.rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
