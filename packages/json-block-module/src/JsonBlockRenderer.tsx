import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer, augmentParentContext } from '@compoz/ui'
import { JsonBlock } from './index'

const JsonBlockRenderer: BlockRenderer<JsonBlock> = ({ block, pageContext, parentContext }) => {
    if (block.children.length === 0) return null

    const newParentContext = augmentParentContext(parentContext, block.settings.contextKey, block.settings.data)

    return (
        <>
            {block.children.map(id => (
                <ChildBlockRenderer
                    key={id}
                    id={id}
                    parent={block}
                    pageContext={pageContext}
                    parentContext={newParentContext}
                />
            ))}
        </>
    )
}

export default JsonBlockRenderer
