export type ReviewEntryMock = {
  id: number,
  text: string,
  author: string,
  date: Date,
  rating: number
}

export type ReviewEntry = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }}
