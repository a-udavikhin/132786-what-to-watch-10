import {FilmGrades} from '../const';

export function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getStarringString(starringArr: Array<string>): string {
  return starringArr.length > 1 ? starringArr.join(', ') : starringArr[0];
}

export function getFilmGrade(rating: number): string {
  if (rating >= 0 && rating < 3)
  {return FilmGrades.Bad;}
  if (rating >= 3 && rating < 5)
  {return FilmGrades.Normal;}
  if (rating >= 5 && rating < 8)
  {return FilmGrades.Good;}
  if (rating >= 8 && rating < 10)
  {return FilmGrades.VeryGood;}
  if (rating === 10)
  {return FilmGrades.Awesome;}

  return 'Unknown';
}

export function getPlural(value: number, unit: string): string {
  return `${value} ${unit}${value > 1 && 's'}`;
}

export function formatRunTime(runTime: number): string {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  return (hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`);
}

export const formatTimeUnit = (value: number): string => value < 10 ? String(value).padStart(2, '0') : String(value);

export function formatPlayerTime(playerTime: number): string {
  const hours = playerTime / (60 * 60);
  const minutes = playerTime % (60 * 60) / 60;
  const seconds = playerTime - hours - minutes;
  return (`-${Math.trunc(hours) > 0 ? `${formatTimeUnit(Math.trunc(hours))}:` : ''}${formatTimeUnit(Math.trunc(minutes))}:${formatTimeUnit(Math.ceil(seconds))}`);
}

export const getVideoProgress = (currentTime: number, duration: number): number => currentTime / duration * 100;
