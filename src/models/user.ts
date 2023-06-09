import mongoose, { Schema, model } from 'mongoose'

export interface lUser {
    name?: string
    email?: string
    password?: string
}

export const userSchema = new Schema<lUser>({
    email: { type: String },
    name: { type: String },
    password: { type: String },
})

export const UserModel = model('User', userSchema)
