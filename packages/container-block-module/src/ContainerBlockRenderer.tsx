import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { ContainerBlock } from './index'

const ContainerBlockRenderer: BlockRenderer<ContainerBlock> = ({ block, pageContext, parentContext }) => {
    return (
        <>
            {block.children.map(id => (
                <ChildBlockRenderer
                    key={id}
                    id={id}
                    parent={block}
                    pageContext={pageContext}
                    parentContext={parentContext}
                />
            ))}
        </>
    )
}

export default ContainerBlockRenderer
