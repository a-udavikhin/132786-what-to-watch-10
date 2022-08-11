import {ReviewEntry} from '../../../../types/review';
import Review from '../../../review/review';
import {REVIEWS_PER_COL} from '../../../../const';

type ReviewsTabProps = {
  filmReviews: ReviewEntry[]
}

function ReviewsTab({filmReviews}: ReviewsTabProps): JSX.Element {
  const reviewsCols = Math.ceil(filmReviews.length / (REVIEWS_PER_COL || 1));
  const colsMarkup: JSX.Element[] = [];
  const reviewsList = filmReviews.map((review , index) => (<Review key={review.id} review={review}/>));

  for (let i = 0; i < reviewsCols; i++) {
    colsMarkup.push(
      <div key={`col-${i}`} className="film-card__reviews-col">
        {reviewsList.slice((i * REVIEWS_PER_COL), (i * REVIEWS_PER_COL) + REVIEWS_PER_COL)}
      </div>
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      {colsMarkup}
    </div>
  );
}

export default ReviewsTab;
