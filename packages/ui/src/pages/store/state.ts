import { Page } from '@compoz/core'

export interface PageState {
    item: Page
    isFetching: boolean
    isStale: boolean
    blocks: {
        items: string[]
        isFetching: boolean
        isStale: boolean
    }
}
