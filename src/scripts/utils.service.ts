import { ServiceSchema } from 'moleculer'
import jwt from 'jsonwebtoken'

export default {
    methods: {
        decodeAuthorization(token) {
            return jwt.decode(token)
        },
        decodeUserInfo(token) {
            return jwt.decode(token)
        },
    },
} as Partial<ServiceSchema>
