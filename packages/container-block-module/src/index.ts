import { Folder } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import ContainerBlockRenderer from './ContainerBlockRenderer'
import ContainerBlockConfigurator from './ContainerBlockConfigurator'

export type ContainerBlock = Block<'container'>

const containerModule: BlockModule<ContainerBlock> = {
    description: `
Add ability to render child blocks under a single block.
`,
    version: '0.1.3',
    schema: {
        text: {
            type: 'longtext'
        }
    },
    defaults: {
        label: 'Container'
    },
    icon: Folder,
    renderer: ContainerBlockRenderer,
    configurator: ContainerBlockConfigurator,
    shouldAddChild: () => true,
    shouldBeAdded: () => true,
}

export default containerModule
