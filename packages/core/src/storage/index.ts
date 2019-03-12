import { Omit } from '../helpers'
import { Page } from '../pages'
import { Block } from '../blocks'

export interface Storage {
    getPages: () => Promise<Page[]>
    createPage: (page: Omit<Page, 'id'>) => Promise<Page>
    getPageBlocks: (pageId: string) => Promise<Block<any>[]>
    createBlock: (block: Omit<Block<any>, 'id'>, pageId?: string) => Promise<Block<any>>
}
