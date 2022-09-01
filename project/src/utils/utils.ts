import {FilmGrades, MINUTES_IN_HOUR, MIN_TWO_DIGIT_NUMBER, TIME_UNIT_PAD_VALUE, TIME_UNIT_ZERO_PAD_COUNT, VIDEO_PROGRESS_PERCENT_TOTAL} from '../const';

export function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getStarringString(starringArr: Array<string>): string {
  return starringArr.length > 1 ? starringArr.join(', ') : starringArr[0];
}

export function getFilmGrade(rating: number): string {
  if (rating >= FilmGrades.Bad.min && rating < FilmGrades.Normal.min)
  {return FilmGrades.Bad.grade;}
  if (rating >= FilmGrades.Normal.min && rating < FilmGrades.Good.min)
  {return FilmGrades.Normal.grade;}
  if (rating >= FilmGrades.Good.min && rating < FilmGrades.VeryGood.min)
  {return FilmGrades.Good.grade;}
  if (rating >= FilmGrades.VeryGood.min && rating < FilmGrades.Awesome.min)
  {return FilmGrades.VeryGood.grade;}
  if (rating === FilmGrades.Awesome.min)
  {return FilmGrades.Awesome.grade;}

  return 'Unknown';
}

export function getPlural(value: number, unit: string): string {
  return `${value} ${unit}${value > 1 && 's'}`;
}

export function formatRunTime(runTime: number): string {
  const hours = Math.floor(runTime / MINUTES_IN_HOUR);
  const minutes = runTime % MINUTES_IN_HOUR;
  return (hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`);
}

export const formatTimeUnit = (value: number): string => value < MIN_TWO_DIGIT_NUMBER ? String(value).padStart(TIME_UNIT_ZERO_PAD_COUNT, TIME_UNIT_PAD_VALUE) : String(value);

export function formatPlayerTime(playerTime: number): string {
  const hours = playerTime / (MINUTES_IN_HOUR * MINUTES_IN_HOUR);
  const minutes = playerTime % (MINUTES_IN_HOUR * MINUTES_IN_HOUR) / MINUTES_IN_HOUR;
  const seconds = playerTime - hours - minutes;
  return (`-${Math.trunc(hours) > 0 ? `${formatTimeUnit(Math.trunc(hours))}:` : ''}${formatTimeUnit(Math.trunc(minutes))}:${formatTimeUnit(Math.ceil(seconds))}`);
}

export const getVideoProgress = (currentTime: number, duration: number): number => currentTime / duration * VIDEO_PROGRESS_PERCENT_TOTAL;
