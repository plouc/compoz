import { Repeat } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import IteratorBlockRenderer from './IteratorBlockRenderer'
import IteratorBlockConfigurator from './IteratorBlockConfigurator'

export type IteratorBlockSettings = {
    method: string
    url: string
    body?: any
    contextKey: string
    enableTemplating: boolean
}

export type IteratorBlock = Block<'iterator', IteratorBlockSettings>

const iteratorModule: BlockModule<IteratorBlock> = {
    description: `
Add ability to iterate over an array from parent context
and render every child for each item of this array.
`,
    version: '0.1.3',
    schema: {},
    defaults: {
        label: 'Iterator',
        settings: {
            contextKey: 'apiData',
        }
    },
    icon: Repeat,
    renderer: IteratorBlockRenderer,
    configurator: IteratorBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true
}

export default iteratorModule
