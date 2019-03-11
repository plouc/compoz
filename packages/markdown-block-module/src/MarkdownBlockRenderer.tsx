import React, { useMemo } from 'react'
import Markdown from 'react-markdown'
import { template as templatize } from 'lodash'
import { BlockRenderer } from '@compoz/core'
import { MarkdownBlock } from './index'

const MarkdownBlockRenderer: BlockRenderer<MarkdownBlock> = ({ block, parentContext }) => {
    const template = useMemo<any>(() => {
        if (block.settings.enableTemplating) return templatize(block.settings.content)
        return () => block.settings.content
    }, [block.settings.enableTemplating, block.settings.content])
    const content = useMemo(() => template(parentContext), [template, parentContext])

    return <Markdown source={content} />
}

export default MarkdownBlockRenderer
