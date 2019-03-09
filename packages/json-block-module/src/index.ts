import { Code } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import JsonBlockRenderer from './JsonBlockRenderer'
import JsonBlockConfigurator from './JsonBlockConfigurator'

export type JsonBlock = Block<
    'json',
    {
        data: any
    }
>

const jsonModule: BlockModule<JsonBlock> = {
    schema: {
        data: {
            type: 'object'
        }
    },
    defaults: {
        label: 'Json Data',
        settings: {
            data: {}
        }
    },
    icon: Code as any,
    renderer: JsonBlockRenderer,
    configurator: JsonBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true
}

export default jsonModule
