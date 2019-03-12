import React, { FunctionComponent } from 'react'
import { Block, getNodeById } from '@compoz/core'
import { usePageBlocks } from '../../pages'
import { useModuleRenderer } from '../../modulesRegistry'

type Props = {
    id: string
    parent: Block<any>
    pageContext: any
    parentContext: any
}

const ChildBlockRenderer: FunctionComponent<Props> = ({ id, parent, pageContext, parentContext }) => {
    const blocks = usePageBlocks()
    const block = getNodeById(blocks, id)
    const render = useModuleRenderer(block.type)

    return <>{render({ block, parent, pageContext, parentContext })}</>
}

export default ChildBlockRenderer
