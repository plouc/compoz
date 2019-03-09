import { Omit, Page } from '@compoz/core'

export interface CreatePageAction {
    type: 'createPage'
    page: Omit<Page, 'id'>
}

export interface DeletePageAction {
    type: 'deletePage'
    pageId: string
}

export interface UpdatePageAction {
    type: 'updatePage'
    pageId: string
}

export type PageAction = CreatePageAction | DeletePageAction | UpdatePageAction
