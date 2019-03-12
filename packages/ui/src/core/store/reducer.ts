import { BuilderState } from './state'
import { BuilderAction } from './actions'
import { pageReducer } from '../../pages'
import { blocksReducer } from '../../blocks'

export const builderReducer = (
    state: BuilderState,
    action: BuilderAction
): BuilderState => {
    console.log(action.type, { state, action })
    switch (action.type) {
        case 'fetchPagesRequest':
            return {
                ...state,
                pagesIds: {
                    ...state.pagesIds,
                    isFetching: true,
                }
            }

        case 'fetchPagesSuccess':
            return {
                ...state,
                pagesIds: {
                    ...state.pagesIds,
                    items: action.pages.map(p => p.id),
                    isFetching: false,
                    isStale: false,
                },
                pageById: {
                    ...state.pageById,
                    ...action.pages.reduce((acc, page) => {
                        return {
                            ...acc,
                            [page.id]: {
                                item: page,
                                isFetching: false,
                                isStale: false,
                                blocks: {
                                    items: [],
                                    isFetching: false,
                                    isStale: true
                                }
                            }
                        }
                    }, {})
                }
            }

        case 'fetchPageBlocksRequest':
            return {
                ...state,
                pageById: {
                    ...state.pageById,
                    [action.id]: pageReducer(state.pageById[action.id], action)
                }
            }
        
        case 'fetchPageBlocksSuccess':
            return {
                ...state,
                pageById: {
                    ...state.pageById,
                    [action.id]: pageReducer(state.pageById[action.id], action)
                },
                blockById: action.blocks.reduce((acc, block) => {
                    return {
                        ...acc,
                        [block.id]: {
                            item: block,
                            isFetching: false,
                            isStale: false
                        }
                    }
                }, { ...state.blockById })
            }

        case 'invalidatePageBlocks':
            return {
                ...state,
                pageById: {
                    ...state.pageById,
                    [action.id]: pageReducer(state.pageById[action.id], action)
                }
            }

        case 'createPageRequest':
            return {
                ...state,
                pageCreation: {
                    ...state.pageCreation,
                    isCreating: true
                }
            }

        case 'createPageSuccess':
            return {
                ...state,
                pageCreation: {
                    ...state.pageCreation,
                    isCreating: false
                },
                pagesIds: {
                    ...state.pagesIds,
                    isStale: true
                },
                pageById: {
                    ...state.pageById,
                    [action.page.id]: pageReducer(state.pageById[action.page.id], action)
                }
            }

        case 'createBlockRequest':
            return {
                ...state,
                blockCreation: {
                    ...state.blockCreation,
                    isCreating: true
                }
            }

        case 'createBlockSuccess':
            return {
                ...state,
                blockCreation: {
                    ...state.blockCreation,
                    isCreating: false
                }
            }

        case 'setCurrentPage':
            return {
                ...state,
                currentPageId: action.id
            }

        case 'removeBlock':
        case 'updateBlock':
            /*
            const pageState = state.byPage[state.currentPageId]

            return {
                ...state,
                byPage: {
                    ...state.byPage,
                    [state.currentPageId]: {
                        ...pageState,
                        blocks: blocksReducer(pageState.blocks, action)
                    }
                }
            }
            */

        default:
            return state
    }
}
