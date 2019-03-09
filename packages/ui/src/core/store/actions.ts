import { PageAction } from '../../pages'
import { BlockAction } from '../../blocks'

export interface SetCurrentPageAction {
    type: 'setCurrentPage'
    id: string
}

export type BuilderAction = PageAction | BlockAction | SetCurrentPageAction
