

import { User } from "../user"

import { Title } from "../title"

export class ViewingHistory {

id: string

userId: string

user?: User

titleId: string

title?: Title

dateCreated: string

dateDeleted: string

dateUpdated: string

}
