import React from 'react'
import Markdown from 'react-markdown'
import { BlockRenderer } from '@compoz/core'
import { useSettingTemplate } from '@compoz/ui'
import { MarkdownBlock } from './index'

const MarkdownBlockRenderer: BlockRenderer<MarkdownBlock> = ({ block: { settings }, parentContext }) => {
    const content = useSettingTemplate(settings.enableTemplating, settings.content, parentContext)

    return <Markdown source={content} />
}

export default MarkdownBlockRenderer
