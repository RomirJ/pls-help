

import { Genre } from "../genre"

import { Rating } from "../rating"

import { Comment } from "../comment"

import { Favorite } from "../favorite"

import { ViewingHistory } from "../viewingHistory"

export class Title {

id: string

name: string

synopsis?: string

genreId?: string

genre?: Genre

dateCreated: string

dateDeleted: string

dateUpdated: string

ratings?: Rating[]

comments?: Comment[]

favorites?: Favorite[]

viewingHistorys?: ViewingHistory[]

}
