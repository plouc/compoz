import { ExternalLink } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import ApiCallBlockRenderer from './ApiCallBlockRenderer'
import ApiCallBlockConfigurator from './ApiCallBlockConfigurator'

export type ApiCallBlockSettings = {
    method: string
    url: string
    body: any
}

export type ApiCallBlock = Block<'apiCall', ApiCallBlockSettings>

const apiCallModule: BlockModule<ApiCallBlock> = {
    schema: {},
    defaults: {
        label: 'API call',
        settings: {
            method: 'GET'
        }
    },
    icon: ExternalLink as any,
    renderer: ApiCallBlockRenderer,
    configurator: ApiCallBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true
}

export default apiCallModule
