import { AlignLeft } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import TextBlockRenderer from './TextBlockRenderer'
import TextBlockConfigurator from './TextBlockConfigurator'

export type TextBlockSettings = {
    text: string
}

export type TextBlock = Block<'text', TextBlockSettings>

const textModule: BlockModule<TextBlock> = {
    schema: {},
    defaults: {
        label: 'Text',
        settings: {
            text: 'Text content.'
        }
    },
    icon: AlignLeft as any,
    renderer: TextBlockRenderer,
    configurator: TextBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true
}

export default textModule
