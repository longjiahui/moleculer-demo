import { ServiceSchema, Context } from "moleculer";

export default {
    name: 'test',
    actions: {
        hello: {
            rest: 'GET /hello/:message?',
            handler(ctx: Context<{message?: string}>){
                return `hello ${ctx.params.message || ''}`
            }
        }
    }
} as ServiceSchema