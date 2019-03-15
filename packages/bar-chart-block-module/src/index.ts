import { BarChart } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import BarChartBlockRenderer from './BarChartBlockRenderer'
import BarChartBlockConfigurator from './BarChartBlockConfigurator'

export type BarChartBlockSettings = {
    dataContextKey: string
    dataKeys: string
}

export type BarChartBlock = Block<'barChart', BarChartBlockSettings>

const barChartModule: BlockModule<BarChartBlock> = {
    description: `
A binding to @nivo/bar package Bar Chart.
    `,
    version: '0.1.3',
    schema: {},
    defaults: {
        label: 'Bar Chart',
        settings: {
            dataContextKey: '',
            dataKeys: ''
        }
    },
    icon: BarChart,
    renderer: BarChartBlockRenderer,
    configurator: BarChartBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true
}

export default barChartModule
