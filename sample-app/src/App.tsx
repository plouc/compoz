import React from 'react'
import { Builder } from '@compoz/ui'
import container, { ContainerBlock } from '@compoz/container-block-module'
import markdown, { MarkdownBlock } from '@compoz/markdown-block-module'
import json, { JsonBlock } from '@compoz/json-block-module'
import proxy, { ProxyBlock } from '@compoz/proxy-block-module'
import text, { TextBlock } from './usage/text'
import apiCall, { ApiCallBlock } from './usage/apiCall.ts'

const BoundBuilder = Builder<{
    container: ContainerBlock
    markdown: MarkdownBlock
    json: JsonBlock
    proxy: ProxyBlock
    text: TextBlock
    apiCall: ApiCallBlock
}>()

const App = () => (
    <BoundBuilder
        modules={{
            container,
            markdown,
            json,
            proxy,
            text,
            apiCall
        }}
    />
)

export default App
