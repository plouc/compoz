import { Block, insertChild } from '@compoz/core'
import { BlockAction } from './actions'

export function blocksReducer(state: Block<any>[], action: BlockAction): Block<any>[] {
    switch (action.type) {
        case 'addBlock':
            const newBlock = {
                ...action.block,
                path: '',
                children: []
            }

            return insertChild(state, action.parentId, action.position, newBlock)

        case 'removeBlock':
            return state
                .filter(block => !block.path.startsWith(action.path))
                .map(block => {
                    if (!block.children.includes(action.path)) return block

                    return {
                        ...block,
                        children: block.children.filter(path => path !== action.path)
                    }
                })

        case 'updateBlock':
            return state.map(block => {
                if (block.path !== action.block.path) {
                    return block
                }

                return {
                    ...block,
                    ...action.block,
                    children: block.children
                }
            })

        default:
            return state
    }
}
