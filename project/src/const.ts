export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum FilmGrades {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome'
}

export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  User = 'USER'
}

export const AUTO_PLAY_DELAY_MS = 1000;

export const REVIEWS_PER_COL = 3;

export const FILMS_PER_PAGE = 8;

export const SIMILAR_FILMS_LIMIT = 4;

export const TIMEOUT_SHOW_ERROR_MS = 3000;

export const VIDEO_PROGRESS_UPDATE_MS = 1000;
