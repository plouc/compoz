import { Link2 } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import ProxyBlockRenderer from './ProxyBlockRenderer'
import ProxyBlockConfigurator from './ProxyBlockConfigurator'

export type ProxyBlock = Block<
    'proxy',
    {
        id: string | null
    }
>

const proxyModule: BlockModule<ProxyBlock> = {
    description: `
Add ability to proxy another block,
it's useful to reuse already defined blocks.
`,
    version: '0.1.3',
    schema: {
        id: {
            type: 'string'
        }
    },
    defaults: {
        label: 'Block Proxy',
        settings: {
            id: ''
        }
    },
    icon: Link2,
    renderer: ProxyBlockRenderer,
    configurator: ProxyBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true,
}

export default proxyModule
