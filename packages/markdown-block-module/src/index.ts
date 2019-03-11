import { AlignLeft } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import MarkdownBlockRenderer from './MarkdownBlockRenderer'
import MarkdownBlockConfigurator from './MarkdownBlockConfigurator'

export type MarkdownBlockSettings = {
    enableTemplating: boolean
    content: string
}

export type MarkdownBlock = Block<'markdown', MarkdownBlockSettings>

const textModule: BlockModule<MarkdownBlock> = {
    schema: {},
    defaults: {
        label: 'Markdown',
        settings: {
            enableTemplating: false,
            content: '# Markdown Block content'
        }
    },
    icon: AlignLeft as any,
    renderer: MarkdownBlockRenderer,
    configurator: MarkdownBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true,
}

export default textModule
