import { BookModel } from "./BookModel"

export interface ProfileModel {
    firstName: string
    lastName: string
    email: string
    books?: BookModel[]
  }