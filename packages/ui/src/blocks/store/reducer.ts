import { Block } from '@compoz/core'
import { BlockAction } from './actions'

export function blocksReducer(state: Block<any>[], action: BlockAction): Block<any>[] {
    switch (action.type) {
        default:
            return state
    }
}
