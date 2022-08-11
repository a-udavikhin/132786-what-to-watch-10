import {useState} from 'react';
import {Film} from '../../types/film';
import {ReviewEntry} from '../../types/review';
import {capitalize} from '../../utils/utils';
import OverviewTab from './components/overview-tab/overview-tab';
import DetailsTab from './components/details-tab/details-tab';
import ReviewsTab from './components/reviews-tab/reviews-tab';

type TabsProps = {
  film: Film,
  filmReviews: ReviewEntry[]
}

type Tab = {
  name: string,
  component: JSX.Element
}

function Tabs({film, filmReviews}: TabsProps): JSX.Element {
  const tabs: Tab[] = [
    {name: 'overview', component: <OverviewTab key={'overview-tab'} film={film} />},
    {name: 'details', component: <DetailsTab key={'details-tab'} film={film} />},
    {name: 'reviews', component: <ReviewsTab key={'reviews-tab'} filmReviews={filmReviews} />}
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

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
