import { Dispatch } from 'react'
import { Omit, Page, Block, Storage } from '@compoz/core'
import { BuilderState, BuilderAction } from '../../core'
import { createBlock } from '../../blocks'

//—————————————————————————————————————————————————————————————————————————————
// Set current page
//—————————————————————————————————————————————————————————————————————————————

export interface SetCurrentPageAction {
    type: 'setCurrentPage'
    id: string
}

export const setCurrentPage = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => (id: string) => {
    if (state.currentPageId === id) return

    dispatch({
        type: 'setCurrentPage',
        id,
    })
}

//—————————————————————————————————————————————————————————————————————————————
// Fetch pages
//—————————————————————————————————————————————————————————————————————————————

export interface FetchPagesRequestAction {
    type: 'fetchPagesRequest'
}

export interface FetchPagesSuccessAction {
    type: 'fetchPagesSuccess'
    pages: Page[]
}

export const fetchPagesIfNeeded = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => async () => {
    if (state.pagesIds.isFetching || !state.pagesIds.isStale) return

    dispatch({
        type: 'fetchPagesRequest'
    })
    const pages = await storage.getPages()
    dispatch({
        type: 'fetchPagesSuccess',
        pages
    })
}

//—————————————————————————————————————————————————————————————————————————————
// Fetch page blocks
//—————————————————————————————————————————————————————————————————————————————

export interface FetchPageBlocksRequestAction {
    type: 'fetchPageBlocksRequest'
    id: string
}

export interface FetchPageBlocksSuccessAction {
    type: 'fetchPageBlocksSuccess'
    id: string
    blocks: Block<any>[]
}

export interface InvalidatePageBlocksAction {
    type: 'invalidatePageBlocks'
    id: string
}

export const fetchPageBlocksIfNeeded = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => async (id: string | null) => {
    if (id === null || !state.pageById[id]) return
    const pageState = state.pageById[id]
    if (pageState.blocks.isFetching || !pageState.blocks.isStale) return

    dispatch({
        type: 'fetchPageBlocksRequest',
        id,
    })
    const blocks = await storage.getPageBlocks(id)
    dispatch({
        type: 'fetchPageBlocksSuccess',
        id,
        blocks,
    })
}

export const invalidatePageBlocks = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => (id: string) => {
    dispatch({
        type: 'invalidatePageBlocks',
        id,
    })
}

//—————————————————————————————————————————————————————————————————————————————
// Create page
//—————————————————————————————————————————————————————————————————————————————

export interface CreatePageRequestAction {
    type: 'createPageRequest'
    page: Omit<Page, 'id' | 'rootBlockId'>
}

export interface CreatePageSuccessAction {
    type: 'createPageSuccess'
    page: Page
}

export const createPage = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => async (page: Omit<Page, 'id' | 'rootBlockId'>) => {
    dispatch({
        type: 'createPageRequest',
        page
    })
    const createdPage = await storage.createPage(page, {
        type: 'container',
        label: 'Root',
        tags: [],
        settings: {}
    })
    dispatch({
        type: 'createPageSuccess',
        page: createdPage
    })
    setCurrentPage(dispatch, state, storage)(createdPage.id)
}

//—————————————————————————————————————————————————————————————————————————————
// Delete page
//—————————————————————————————————————————————————————————————————————————————

export interface DeletePageAction {
    type: 'deletePage'
    pageId: string
}

//—————————————————————————————————————————————————————————————————————————————
// Update page
//—————————————————————————————————————————————————————————————————————————————

export interface UpdatePageAction {
    type: 'updatePage'
    pageId: string
}

//—————————————————————————————————————————————————————————————————————————————
// Invalidate page
//—————————————————————————————————————————————————————————————————————————————

export interface InvalidatePageAction {
    type: 'invalidatePage'
    id: string
}

export type PageAction = 
    | SetCurrentPageAction
    | FetchPagesRequestAction
    | FetchPagesSuccessAction
    | FetchPageBlocksRequestAction
    | FetchPageBlocksSuccessAction
    | InvalidatePageBlocksAction
    | CreatePageRequestAction
    | CreatePageSuccessAction
    | DeletePageAction
    | UpdatePageAction
    | InvalidatePageAction
