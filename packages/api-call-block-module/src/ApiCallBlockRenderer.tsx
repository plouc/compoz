import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer, augmentParentContext } from '@compoz/ui'
import { ApiCallBlock } from './index'

const ApiCallBlockRenderer: BlockRenderer<ApiCallBlock> = ({ block, pageContext, parentContext }) => {
    const newParentContext = augmentParentContext(parentContext, block.settings.contextKey, { apiRes: 'yay' })
    
    return (
        <>
            <div>{block.settings.method}</div>
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

export default ApiCallBlockRenderer
