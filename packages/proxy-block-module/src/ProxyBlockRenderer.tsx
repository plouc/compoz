import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { ProxyBlock } from './index'

const ProxyBlockRenderer: BlockRenderer<ProxyBlock> = ({ block, parent, pageContext, parentContext }) => {
    const id = block.settings.id
    if (id === undefined || id === null || id === '') {
        return null
    }

    return (
        <ChildBlockRenderer
            id={id}
            parent={block}
            pageContext={pageContext}
            parentContext={parentContext}
        />
    )
}

export default ProxyBlockRenderer
