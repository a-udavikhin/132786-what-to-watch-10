import {ReviewEntry} from '../../types/review';
import './review.css';

type ReviewsProps = {
  review: ReviewEntry
}

function Review({review}: ReviewsProps): JSX.Element {
  const reviewDate = new Date(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={reviewDate.toISOString()}>{reviewDate.toLocaleString('en', {month: 'long', day: 'numeric', year:'numeric'})}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
