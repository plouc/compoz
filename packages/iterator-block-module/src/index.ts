import { MoreVertical } from 'react-feather'
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
    schema: {},
    defaults: {
        label: 'Iterator',
        settings: {
            contextKey: 'apiData',
        }
    },
    icon: MoreVertical,
    renderer: IteratorBlockRenderer,
    configurator: IteratorBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true
}

export default iteratorModule
