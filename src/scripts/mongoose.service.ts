import { Service, ServiceSchema } from 'moleculer'
import { connect, disconnect } from 'mongoose'

type getArgTypes<T> = T extends (...rest: infer R) => any ? R : any[]
type ConnectArgs = getArgTypes<typeof connect>

export interface MongooseServiceSettingSchema<Model extends object> {
    connect: ConnectArgs
    model: Model
}

export type MongooseService<Model extends object> = Service & {
    model: Model
}
export type MongooseServiceSchema<Model extends object> = ServiceSchema<
    MongooseServiceSettingSchema<Model>
>

export default {
    settings: {
        connect: ['mongodb://localhost:27017/group'],
    },
    created() {
        this.model = this.settings.model
    },
    async started() {
        if (this.settings.connect) {
            await connect(...this.settings.connect)
        }
    },
    async stopped() {
        await disconnect()
    },
} as Partial<ServiceSchema<Partial<MongooseServiceSettingSchema<{}>>>>
