import {BaseSyntheticEvent, useState} from 'react';

function AddReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({
    rating: '8',
    reviewText: ''
  });

  const fieldChangeHandle = (evt: BaseSyntheticEvent) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const starsMarkUp = [];
  for (let stars = 10; stars > 0; stars--) {
    starsMarkUp.push(
      <>
        <input key={`input-${stars}`} className="rating__input" id={`star-${stars}`} type="radio" name="rating" onChange={fieldChangeHandle} value={stars} checked={Number(formData.rating) === stars} />
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
        <textarea className="add-review__textarea" name="reviewText" onChange={fieldChangeHandle} id="review-text" placeholder="Review text" value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
