import { BuilderState } from './state'
import { BuilderAction } from './actions'
import { blocksReducer } from '../../blocks'

export function builderReducer(state: BuilderState, action: BuilderAction): BuilderState {
    switch (action.type) {
        case 'addBlock':
        case 'removeBlock':
        case 'updateBlock':
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

        case 'setCurrentPage':
            return {
                ...state,
                currentPageId: action.id
            }

        default:
            return state
    }
}
