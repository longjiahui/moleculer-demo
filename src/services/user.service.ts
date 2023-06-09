import { ServiceSchema } from 'moleculer'
import DbService, { MoleculerDB } from 'moleculer-db'
import MongooseDbAdapter from 'moleculer-db-adapter-mongoose'
import { User } from '../models/user'

export default {
    name: 'user',
    version: 1,
    mixins: [DbService],
    adapter: new MongooseDbAdapter('mongodb://localhsot:27017/group'),
} as ServiceSchema
