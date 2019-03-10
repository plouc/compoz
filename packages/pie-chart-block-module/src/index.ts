import { PieChart } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import PieChartBlockRenderer from './PieChartBlockRenderer'
import PieChartBlockConfigurator from './PieChartBlockConfigurator'

export type PieChartBlockSettings = {
    dataContextKey: string
}

export type PieChartBlock = Block<'pieChart', PieChartBlockSettings>

const pieChartModule: BlockModule<PieChartBlock> = {
    schema: {},
    defaults: {
        label: 'Pie Chart',
        settings: {
            dataContextKey: ''
        }
    },
    icon: PieChart as any,
    renderer: PieChartBlockRenderer,
    configurator: PieChartBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true
}

export default pieChartModule
