import React, { FunctionComponent } from 'react'
import { Block } from '@compoz/core'
import { useModuleRenderer } from '../../modulesRegistry'

type Props = {
    block: Block<any>
    parent?: Block<any>
}

const BlockAdmin: FunctionComponent<Props> = ({ block, parent }) => {
    const render = useModuleRenderer(block.type)

    return <>{render({ block, parent })}</>
}

export default BlockAdmin
