export type Film = {
    id: number
    name: string
    posterImage: string
    previewImage: string
    backgroundImage: string
    backgroundColor: string
    videoLink: string
    previewVideoLink: string
    description: string
    rating: number
    scoresCount: number
    director: string
    starring: [string]
    runTime: number
    genre: string
    released: number
    isFavorite: boolean
}

export type PromoFilm = {
    title: string,
    genre: string,
    year: string
}

//export type Genre = 'All genres' | 'Comedies' | 'Crime' | 'Documentary' | 'Dramas' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thrillers';
