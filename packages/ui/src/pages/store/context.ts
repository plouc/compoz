import { useMemo } from 'react'
import { Page, Block } from '@compoz/core'
import { useBuilderState } from '../../core'

export const usePages = (): Page[] => {
    const state = useBuilderState()
    const pages = useMemo(
        () => {
            const { items: pagesIds } = state.pagesIds
            const pageById = state.pageById

            return pagesIds.map(id => pageById[id].item)
        },
        [state.pagesIds]
    )

    return pages
}

export const usePage = (): Page | null => {
    const state = useBuilderState()
    if (state.currentPageId === null) return null
    
    const pageState = state.pageById[state.currentPageId]
    if (!pageState) return null

    return pageState.item
}

export const usePageBlocks = (): Block<any>[] => {
    const state = useBuilderState()
    const pageBlocks = useMemo(
        () => {
            let blocks: Block<any>[] = []
            if (state.currentPageId !== null) {
                const pageState = state.pageById[state.currentPageId]
                if (pageState) {
                    blocks = pageState.blocks.items.map(id => {
                        return state.blockById[id].item
                    })
                }
            }

            return blocks
        },
        [
            state.currentPageId,
            state.pageById,
            state.pageById
        ]
    )
 
    return pageBlocks
}