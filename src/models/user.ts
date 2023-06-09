import { ObjectId } from 'mongoose'

export interface User {
    id: ObjectId
    name?: string
    email?: string
}
