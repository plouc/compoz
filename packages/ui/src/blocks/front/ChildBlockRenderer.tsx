import React, { FunctionComponent } from 'react'
import { Block, getNodeById } from '@compoz/core'
import { usePageState } from '../../pages'
import { useModuleRenderer } from '../../modulesRegistry'

type Props = {
    id: string
    parent?: Block<any>
}

const ChildBlockRenderer: FunctionComponent<Props> = ({ id, parent }) => {
    const blocks = usePageState('blocks')
    const block = getNodeById(blocks, id)
    const render = useModuleRenderer(block.type)

    return <>{render({ block, parent })}</>
}

export default ChildBlockRenderer
