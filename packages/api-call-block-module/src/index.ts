import { ExternalLink } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import ApiCallBlockRenderer from './ApiCallBlockRenderer'
import ApiCallBlockConfigurator from './ApiCallBlockConfigurator'

export type ApiCallBlockSettings = {
    method: string
    url: string
    body?: any
    contextKey: string
    enableTemplating: boolean
}

export type ApiCallBlock = Block<'apiCall', ApiCallBlockSettings>

const apiCallModule: BlockModule<ApiCallBlock> = {
    description: `
This module add ability to call external APIs to populate the current context.
`,
    version: '0.1.3',
    schema: {},
    defaults: {
        label: 'API call',
        settings: {
            method: 'GET',
            url: '',
            contextKey: 'apiData',
            enableTemplating: false,
        }
    },
    icon: ExternalLink,
    renderer: ApiCallBlockRenderer,
    configurator: ApiCallBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true
}

export default apiCallModule
