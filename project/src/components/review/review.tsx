import {ReviewEntry} from '../../types/review';

type ReviewsProps = {
  review: ReviewEntry
}

function Review({review}: ReviewsProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date.toISOString()}>{review.date.toLocaleString('en', {month: 'long', day: 'numeric', year:'numeric'})}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
