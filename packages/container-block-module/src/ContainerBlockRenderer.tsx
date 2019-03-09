import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { ContainerBlock } from './index'

const ContainerBlockRenderer: BlockRenderer<ContainerBlock> = ({ block }) => {
    return (
        <>
            {block.children.map(id => (
                <ChildBlockRenderer key={id} id={id} />
            ))}
        </>
    )
}

export default ContainerBlockRenderer
