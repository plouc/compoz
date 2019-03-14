import React, { useMemo } from 'react'
import { get } from 'lodash'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer } from '@compoz/ui'
import { IteratorBlock } from './index'

const IteratorBlockRenderer: BlockRenderer<IteratorBlock> = ({ block, pageContext, parentContext }) => {
    const contextArray: any[] = get(parentContext, block.settings.contextKey)
    if (!Array.isArray(contextArray)) {
        throw new Error(`iterator block requires that \`contextKey\` points to a valid array`)
    }
    const contexts: any[] = useMemo(
        () => {
            return contextArray.map(ctx => {
                return {
                    ...parentContext,
                    ...ctx,
                }
            })
        },
        [parentContext, contextArray]
    )

    return (
        <>
            {contexts.map(context => {
                console.log(context)
                return block.children.map(id => (
                    <ChildBlockRenderer
                        key={id}
                        id={id}
                        parent={block}
                        pageContext={pageContext}
                        parentContext={context}
                    />
                ))
            })}
        </>
    )
}

export default IteratorBlockRenderer
