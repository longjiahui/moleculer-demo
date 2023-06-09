import { Service, ServiceSchema, ServiceSettingSchema } from 'moleculer'
import { Server } from 'socket.io'

type IOSettingSchema = ServiceSettingSchema & { port: number; origin: string[] }
type IOServiceSchema = ServiceSchema<IOSettingSchema>
type LifeCycleThis = Service<IOSettingSchema> & {
    io?: Server<{
        call: (service: string, params: any, ret: (_: string) => void) => any
    }>
}

export default {
    name: 'io',
    settings: {
        port: 3000,
    },
    created(this: LifeCycleThis) {
        this.io = new Server()
        this.io.listen(this.settings.port)
    },
    started(this: LifeCycleThis) {
        this.io?.use((socket, next) => {
            socket.handshake.headers.authorization
        })
        this.io?.sockets.on('connect', (socket) => {
            socket.on('call', async (service, params, ret) => {
                ret(await this.broker.call(service, params))
            })
        })
    },
    stopped(this: LifeCycleThis) {
        this.io?.close()
    },
} as IOServiceSchema
