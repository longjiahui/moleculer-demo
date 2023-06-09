import { ServiceSchema } from 'moleculer'
import ApiGatewayService, { ApiSettingsSchema } from 'moleculer-web'

export default {
    name: 'api',
    mixins: [ApiGatewayService],
    settings: {
        routes: [
            {
                path: '/api',
                whitelist: ['test.*', 'user.*'],
                autoAliases: true,
            },
        ],
    },
} as ServiceSchema<ApiSettingsSchema>
