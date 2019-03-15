import { Code } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import JsonBlockRenderer from './JsonBlockRenderer'
import JsonBlockConfigurator from './JsonBlockConfigurator'

export type JsonBlock = Block<
    'json',
    {
        contextKey: string
        data: any
    }
>

const jsonModule: BlockModule<JsonBlock> = {
    description: `
Add ability to inject static json data in context
to be available for child blocks.
`,
    version: '0.1.3',
    schema: {
        data: {
            type: 'object'
        }
    },
    defaults: {
        label: 'Json Data',
        settings: {
            contextKey: 'jsonData',
            data: {}
        }
    },
    icon: Code,
    renderer: JsonBlockRenderer,
    configurator: JsonBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true,
}

export default jsonModule
