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

export const FilmGrades = {
  Bad: {grade: 'Bad', min: 0},
  Normal: {grade: 'Normal', min: 3},
  Good: {grade: 'Good', min: 5},
  VeryGood: {grade: 'Very Good', min: 8},
  Awesome: {grade: 'Awesome', min: 10}
} as const;

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

export const MINUTES_IN_HOUR = 60;

export const TIME_UNIT_ZERO_PAD_COUNT = 2;

export const TIME_UNIT_PAD_VALUE = '0';

export const MIN_TWO_DIGIT_NUMBER = 10;

export const VIDEO_PROGRESS_PERCENT_TOTAL = 100;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 400;

export const REVIEW_UNINITIALIZED_RATING_VALUE = '0';

export const ERROR_EMPTY_LOGIN_DATA_MESSAGE = 'Login and password cannot be empty!';

export const ERROR_PASSWORD_REQUIREMENTS_MESSAGE = 'Password should contain at least one letter and at least one digit';
