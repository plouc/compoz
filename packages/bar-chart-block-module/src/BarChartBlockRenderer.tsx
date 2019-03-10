import React, { useMemo } from 'react'
import { BlockRenderer } from '@compoz/core'
import { ResponsiveBar } from '@nivo/bar'
import { BarChartBlock } from './index'

const BarChartBlockRenderer: BlockRenderer<BarChartBlock> = ({ block, parentContext }) => {
    const chartData = useMemo(() => {
        const data = parentContext[block.settings.dataContextKey]
        if (!Array.isArray(data)) {
            throw new Error(`invalid bar chart data`)
        }

        return data
    }, [parentContext, block.settings.dataContextKey])

    return (
        <div style={{ height: 200 }}>
            <ResponsiveBar
                keys={block.settings.dataKeys.split('|')}
                data={chartData}
            />
        </div>
    )
}

export default BarChartBlockRenderer
