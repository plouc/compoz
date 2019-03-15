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
    description: `
Add ability render markdown, it also supports using data
from the parent context.
`,
    version: '0.1.3',
    schema: {},
    defaults: {
        label: 'Markdown',
        settings: {
            enableTemplating: false,
            content: ''
        }
    },
    icon: AlignLeft,
    renderer: MarkdownBlockRenderer,
    configurator: MarkdownBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true,
}

export default textModule
