import React from 'react'
import { Builder } from '@compoz/ui'
import indexedDbStorage from '@compoz/indexeddb-storage'
import apiCall, { ApiCallBlock } from '@compoz/api-call-block-module'
import container, { ContainerBlock } from '@compoz/container-block-module'
import markdown, { MarkdownBlock } from '@compoz/markdown-block-module'
import iterator, { IteratorBlock } from '@compoz/iterator-block-module'
import json, { JsonBlock } from '@compoz/json-block-module'
import proxy, { ProxyBlock } from '@compoz/proxy-block-module'
import pieChart, { PieChartBlock } from '@compoz/pie-chart-block-module'
import barChart, { BarChartBlock } from '@compoz/bar-chart-block-module'
import text, { TextBlock } from './customBlockModules/text'

const BoundBuilder = Builder<{
    container: ContainerBlock
    markdown: MarkdownBlock
    iterator: IteratorBlock
    json: JsonBlock
    proxy: ProxyBlock
    text: TextBlock
    apiCall: ApiCallBlock
    pieChart: PieChartBlock
    barChart: BarChartBlock
}>()

const storage = indexedDbStorage()

const App = () => (
    <BoundBuilder
        storage={storage}
        modules={{
            container,
            markdown,
            iterator,
            json,
            proxy,
            text,
            apiCall,
            pieChart,
            barChart
        }}
    />
)

export default App
