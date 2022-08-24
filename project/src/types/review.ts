import {UserType} from './user';

export type ReviewEntry = {
  comment: string
  date: string
  id: number
  rating: number
  user: UserType
}
