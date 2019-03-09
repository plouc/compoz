import React from 'react'
import Markdown from 'react-markdown'
import { BlockRenderer } from '@compoz/core'
import { MarkdownBlock } from './index'

const TextBlockRenderer: BlockRenderer<MarkdownBlock> = ({ block }) => {
    return <Markdown source={block.settings.content} />
}

export default TextBlockRenderer
