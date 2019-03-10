import React from 'react'
import { BlockRenderer } from '@compoz/core'
import { TextBlock } from './index'

const TextBlockRenderer: BlockRenderer<TextBlock> = ({ block }) => {
    return <div>{block.settings.text}</div>
}

export default TextBlockRenderer
