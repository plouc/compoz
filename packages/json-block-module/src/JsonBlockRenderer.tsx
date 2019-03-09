import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { JsonBlock } from './index'

const JsonBlockRenderer: BlockRenderer<JsonBlock> = ({ block }) => {
    return (
        <>
            <pre>{JSON.stringify(block.settings.data, null, '  ')}</pre>
            {block.children.map(id => (
                <ChildBlockRenderer key={id} id={id} />
            ))}
        </>
    )
}

export default JsonBlockRenderer
