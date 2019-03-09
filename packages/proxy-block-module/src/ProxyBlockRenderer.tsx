import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { ProxyBlock } from './index'

const ProxyBlockRenderer: BlockRenderer<ProxyBlock> = ({ block }) => {
    const id = block.settings.id
    if (id === undefined || id === null || id === '') {
        return null
    }

    return <ChildBlockRenderer id={id} />
}

export default ProxyBlockRenderer
