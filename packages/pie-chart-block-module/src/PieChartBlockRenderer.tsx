import React, { useMemo } from 'react'
import { BlockRenderer } from '@compoz/core'
import { ResponsivePie } from '@nivo/pie'
import { PieChartBlock } from './index'

const PieChartBlockRenderer: BlockRenderer<PieChartBlock> = ({ block, parentContext }) => {
    const chartData = useMemo(() => {
        const data = parentContext[block.settings.dataContextKey]
        if (!Array.isArray(data)) {
            throw new Error(`invalid pie chart data`)
        }

        return data
    }, [parentContext, block.settings.dataContextKey])

    return (
        <div style={{ height: 200 }}>
            <ResponsivePie
                data={chartData}
            />
        </div>
    )
}

export default PieChartBlockRenderer
