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
    icon: Link2 as any,
    renderer: ProxyBlockRenderer,
    configurator: ProxyBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true,
}

export default proxyModule
