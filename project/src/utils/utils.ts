export function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function getStarringString(starringArr: Array<string>): string {
  return starringArr.length > 1 ? starringArr.join(', ') : starringArr[0];
}

export function getFilmGrade(rating: number): string {
  if (rating >= 0 && rating < 3)
  {return 'Bad';}
  if (rating >= 3 && rating < 5)
  {return 'Normal';}
  if (rating >= 5 && rating < 8)
  {return 'Good';}
  if (rating >= 8 && rating < 10)
  {return 'Very Good';}
  if (rating === 10)
  {return 'Awesome';}

  return 'Unknown';
}

export function formatRunTime(runTime: number): string {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  return (hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`);
}
