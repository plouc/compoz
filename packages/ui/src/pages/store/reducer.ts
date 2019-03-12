import { BuilderAction } from '../../core'
import { PageState } from './state'

export const pageReducer = (state: PageState = {
    item: {} as any,
    isFetching: false,
    isStale: true,
    blocks: {
        items: [],
        isFetching: false,
        isStale: true
    }
}, action: BuilderAction): PageState => {
    switch (action.type) {
        case 'createPageSuccess':
            return {
                ...state,
                item: action.page,
                isFetching: false,
                isStale: false,
            }

        case 'fetchPageBlocksRequest':
            return {
                ...state,
                blocks: {
                    ...state.blocks,
                    isFetching: true,
                }
            }
        
        case 'fetchPageBlocksSuccess':
            return {
                ...state,
                blocks: {
                    items: action.blocks.map(b => b.id),
                    isFetching: false,
                    isStale: false
                }
            }

        case 'invalidatePageBlocks':
            return {
                ...state,
                blocks: {
                    ...state.blocks,
                    isStale: true
                }
            }

        default:
            return state
    }
}
