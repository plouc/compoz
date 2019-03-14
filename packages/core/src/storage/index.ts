import { Omit } from '../helpers'
import { Page } from '../pages'
import { Block } from '../blocks'

export interface Storage {
    /**
     * List all available pages.
     */
    getPages: () => Promise<Page[]>
    /**
     * Create a new page along with its root block.
     */
    createPage: (
        page: Omit<Page, 'id' | 'rootBlockId'>,
        root: Omit<Block<any>, 'id' | 'children'>
    ) => Promise<Page>
    /**
     * Fetch a block by its id.
     */
    getBlock: (id: string) => Promise<Block<any> | null>
    /**
     * List all available blocks.
     */
    getBlocks: () => Promise<Block<any>[]>
    /**
     * Retrieve all blocks attached to the given page id.
     */
    getPageBlocks: (pageId: string) => Promise<Block<any>[]>
    /**
     * Create a new block, which can be attached
     * to a parent block or page.
     */
    createBlock: (block: Omit<Block<any>, 'id' | 'children'>, options?: {
        pageId?: string
        parentId?: string
        position?: number
    }) => Promise<Block<any>>
}
