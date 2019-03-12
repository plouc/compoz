import { Block } from '@compoz/core'
import { PageState } from '../../pages'

export interface BuilderState {
    currentPageId: string | null
    pageCreation: {
        isCreating: boolean
    }
    pagesIds: {
        items: string[]
        isFetching: boolean
        isStale: boolean
    }
    pageById: {
        [pageId: string]: PageState
    }
    blockCreation: {
        isCreating: boolean
    }
    blockById: {
        [blockId: string]: {
            item: Block<any>
            isFetching: boolean
            isStale: boolean
        }
    }
}
