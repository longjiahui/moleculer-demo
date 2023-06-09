import { ServiceSchema } from 'moleculer'
import { Service } from 'moleculer'
import { UserModel } from '../models/user'
import mongooseService, {
    MongooseService,
    MongooseServiceSchema,
} from '../scripts/mongoose.service'

const model = {
    [UserModel.name]: UserModel,
}

type ThisType = MongooseService<typeof model>

export default {
    name: 'user',
    mixins: [mongooseService],
    actions: {
        list: {
            rest: 'GET /list',
            handler(this: ThisType, ctx) {
                this.logger.info(this.model)
                return 'hello list'
            },
        },
    },
} as MongooseServiceSchema<typeof model>
