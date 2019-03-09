import { Omit, Block } from '@compoz/core'

export interface AddBlockAction {
    type: 'addBlock'
    parentId: string
    position: number
    block: Omit<Block<any>, 'id' | 'path' | 'children'>
}

export interface RemoveBlockAction {
    type: 'removeBlock'
    path: string
}

export interface UpdateBlockAction<B extends Block<any> = Block<any>> {
    type: 'updateBlock'
    block: B
}

export type BlockAction = AddBlockAction | RemoveBlockAction | UpdateBlockAction
