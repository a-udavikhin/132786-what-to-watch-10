export type Film = {
  id: number,
  title: string,
  genre: Genre,
  src: string,
  previewSrc: string
}

export type PromoFilm = {
    title: string,
    genre: string,
    year: string
}

export type Genre = 'Comedies' | 'Crime' | 'Documentary' | 'Dramas' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thrillers';
