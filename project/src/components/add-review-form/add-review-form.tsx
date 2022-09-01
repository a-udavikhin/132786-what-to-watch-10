import {BaseSyntheticEvent, FormEvent, Fragment, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {sendReviewAction} from '../../store/api-actions';
import {AppRoute, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';
import './add-review-form.css';
import {useAppDispatch} from '../../hooks/redux';

function AddReviewForm(): JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: '0',
    reviewText: ''
  });

  const handleFieldChange = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendReviewAction({filmId: Number(id), comment: formData.reviewText, rating: Number(formData.rating)}));
    navigate(AppRoute.Film.replace(':id', String(id)), {state: {activeTab: 'reviews'}});
  };

  const starsMarkUp = [];
  for (let stars = 10; stars > 0; stars--) {
    starsMarkUp.push(
      <Fragment key={`stars-wrap-${stars}`}>
        <input key={`input-${stars}`} className="rating__input" id={`star-${stars}`} type="radio" name="rating" onChange={handleFieldChange} value={stars} checked={Number(formData.rating) === stars} />
        <label key={`label-${stars}`} className="rating__label" htmlFor={`star-${stars}`}>Rating {stars}</label>
      </Fragment>);
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {starsMarkUp}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="reviewText" onChange={handleFieldChange} id="review-text" placeholder="Review text" value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={handleSubmit} disabled={formData.reviewText.length < MIN_REVIEW_LENGTH || formData.reviewText.length > MAX_REVIEW_LENGTH || formData.rating === '0'}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
