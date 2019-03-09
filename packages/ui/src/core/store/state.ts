import { PageState } from '../../pages'

export interface BuilderState {
    currentPageId: string
    byPage: {
        [pageId: string]: PageState
    }
}
