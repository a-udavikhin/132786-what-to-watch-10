import {useState} from 'react';
import {Film} from '../../types/film';
import {ReviewEntry} from '../../types/review';
import {capitalize} from '../../utils/utils';
import OverviewTab from './components/overview-tab/overview-tab';
import DetailsTab from './components/details-tab/details-tab';
import ReviewsTab from './components/reviews-tab/reviews-tab';


type Tab = {
  name: string,
  component: JSX.Element
}

type TabsProps = {
  currentFilm: Film,
  filmReviews: ReviewEntry[],
  active?: string
}

function Tabs({currentFilm, filmReviews, active}: TabsProps): JSX.Element {
  const tabs: Tab[] = [
    {name: 'overview', component: <OverviewTab key={'overview-tab'} currentFilm={currentFilm} />},
    {name: 'details', component: <DetailsTab key={'details-tab'} currentFilm={currentFilm} />},
    {name: 'reviews', component: <ReviewsTab key={'reviews-tab'} filmReviews={filmReviews} />}
  ];

  const [activeTab, setActiveTab] = useState(active ?? tabs[0].name);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li key={`li-${tab.name}`} className={`film-nav__item ${tab.name === activeTab ? 'film-nav__item--active' : ''}`}>
              <a onClick={() => setActiveTab(tab.name)} className="film-nav__link">{capitalize(tab.name)}</a>
            </li>
          ))}
        </ul>
      </nav>
      {tabs.find((tab) => tab.name === activeTab)?.component}
    </div>
  );
}

export default Tabs;
