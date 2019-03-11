import React, { useMemo } from 'react'
import { template as templatize } from 'lodash'
import { BlockRenderer } from '@compoz/core'
import { TextBlock } from './index'

const TextBlockRenderer: BlockRenderer<TextBlock> = ({ block, parentContext }) => {
    const template = useMemo<any>(() => {
        if (block.settings.enableTemplating) return templatize(block.settings.text)
        return () => block.settings.text
    }, [block.settings.enableTemplating, block.settings.text])
    const content = useMemo(() => template(parentContext), [template, parentContext])

    return <div>{content}</div>
}

export default TextBlockRenderer
