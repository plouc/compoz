import React, { useMemo, useEffect, useState } from 'react'
import { BlockRenderer } from '@compoz/core'
import { ChildBlockRenderer, useSettingTemplate } from '@compoz/ui'
import { ApiCallBlock } from './index'

const ApiCallBlockRenderer: BlockRenderer<ApiCallBlock> = ({ block, pageContext, parentContext }) => {
    const url = useSettingTemplate(block.settings.enableTemplating, block.settings.url, parentContext)
    const [apiResponse, setApiResponse] = useState<{
        isFetching: boolean
        error: null | Error
        data: any
    }>({
        isFetching: true,
        error: null,
        data: {}
    })
    const callData = useEffect(
        (): any => {
            fetch(url, {
                method: block.settings.method,
            })
                .then(res => res.json())
                .then(data => {
                    setApiResponse({
                        isFetching: false,
                        error: null,
                        data
                    })
                })
        
            return () => {}
        },
        [url, block.settings]
    )
    const newParentContext = useMemo(
        () => {
            return {
                ...parentContext,
                [block.settings.contextKey]: apiResponse.data
            }
        },
        [parentContext, block.settings.contextKey, apiResponse.data]
    )

    console.log(newParentContext)

    return (
        <>
            {apiResponse.isFetching && <div>…fetching…</div>}
            {!apiResponse.isFetching && block.children.map(id => (
                <ChildBlockRenderer
                    key={id}
                    id={id}
                    parent={block}
                    pageContext={pageContext}
                    parentContext={newParentContext}
                />
            ))}
        </>
    )
}

export default ApiCallBlockRenderer
