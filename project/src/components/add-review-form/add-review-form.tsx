import {BaseSyntheticEvent, FormEvent, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {store} from '../../store';
import {sendReviewAction} from '../../store/api-actions';
import {AppRoute} from '../../const';

function AddReviewForm(): JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rating: '8',
    reviewText: ''
  });

  const handleFieldChange = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    store.dispatch(sendReviewAction({filmId: Number(id), comment: formData.reviewText, rating: Number(formData.rating)}));
    navigate(AppRoute.Film.replace(':id', String(id)), {state: {activeTab: 'reviews'}});
  };

  const starsMarkUp = [];
  for (let stars = 10; stars > 0; stars--) {
    starsMarkUp.push(
      <>
        <input key={`input-${stars}`} className="rating__input" id={`star-${stars}`} type="radio" name="rating" onChange={handleFieldChange} value={stars} checked={Number(formData.rating) === stars} />
        <label key={`label-${stars}`} className="rating__label" htmlFor={`star-${stars}`}>Rating {stars}</label>
      </>);
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
          <button className="add-review__btn" type="submit" onClick={handleSubmit}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
