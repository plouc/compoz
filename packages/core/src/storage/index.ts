import { Page } from '../pages'
import { Block } from '../blocks'

export interface Storage {
    createPage: (page: Page) => Promise<Page>
    getPage: (pageId: string) => Promise<Page>
    updatePage: (page: Page) => Promise<Page>
    deletePage: (pageId: string) => Promise<void>

    createBlock: (pageId: string, block: Block<any>) => Promise<Block<any>>
    getBlock: (pageId: string, blockId: string) => Promise<Block<any>>
    updateBlock: (pageId: string, block: Block<any>) => Promise<Block<any>>
    deleteBlock: (pageId: string, blockId: string) => Promise<void>
}
