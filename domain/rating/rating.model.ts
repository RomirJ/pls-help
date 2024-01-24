

import { User } from "../user"

import { Title } from "../title"

export class Rating {

id: string

score: number

userId: string

user?: User

titleId: string

title?: Title

dateCreated: string

dateDeleted: string

dateUpdated: string

}
