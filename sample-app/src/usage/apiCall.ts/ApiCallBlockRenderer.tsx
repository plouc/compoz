import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { ApiCallBlock } from './index'

const ApiCallBlockRenderer: BlockRenderer<ApiCallBlock> = ({ block }) => {
    return (
        <>
            <div>{block.settings.method}</div>
            {block.children.map(id => (
                <ChildBlockRenderer key={id} id={id} />
            ))}
        </>
    )
}

export default ApiCallBlockRenderer
