import { Omit, Block, Page, uuid, Storage } from '@compoz/core'
import {
    openDatabase,
    getItems,
    getItemsByRange,
    getItem,
    addItem,
    updateItem,
} from './helpers'
import { createSchema } from './createSchema'

export default (): Storage => {
    let dbCache: IDBDatabase
    const getDatabase = async (): Promise<IDBDatabase> => {
        if (dbCache !== undefined) return dbCache

        const dbInstance = await openDatabase('compoz', 1, createSchema)
        dbCache = dbInstance

        return dbInstance
    }

    const getPages = async (): Promise<Page[]> => {
        const db = await getDatabase()

        return getItems(db, 'pages')
    }

    const createPage = async (
        page: Omit<Page, 'id' | 'rootBlockId'>,
        root: Omit<Block<any>, 'id' | 'children'>
    ): Promise<Page> => {
        const db = await getDatabase()
        const pageWithId = {
            id: uuid(),
            ...page,
        }
        await addItem(db, 'pages', pageWithId)
        const rootBlock = {
            id: uuid(),
            pageId: pageWithId.id,
            children: [],
            ...root
        }
        await addItem(db, 'blocks', rootBlock)
        const pageWithRoot = {
            ...pageWithId,
            rootBlockId: rootBlock.id,
        }
        await updateItem(db, 'pages', pageWithRoot)

        return pageWithRoot
    }

    const getBlock = async (id: string): Promise<Block<any> | null> => {
        const db = await getDatabase()
        const res = await getItem(db, 'blocks', id)

        return res ? res as Block<any> : null
    }

    const getBlocks = async (): Promise<Block<any>[]> => {
        const db = await getDatabase()

        return getItems(db, 'blocks')
    }

    const getPageBlocks = async (id: string): Promise<Block<any>[]> => {
        const db = await getDatabase()
        const blocks = await getItemsByRange(db, 'blocks', 'pageId', IDBKeyRange.bound(id, id))

        return blocks
    }

    const createBlock = async (block: Omit<Block<any>, 'id' | 'children'>, {
        pageId,
        parentId,
        position
    }: {
        pageId?: string
        parentId?: string
        position?: number
    } = {}) => {
        const db = await getDatabase()
        let parent: Block<any> | null = null
        if (parentId !== undefined) {
            parent = await getBlock(parentId)
        }

        const blockWithId = {
            id: uuid(),
            children: [],
            ...block,
        }
        await addItem(db, 'blocks', { pageId, ...blockWithId })
        if (parent !== null) {
            parent.children.push(blockWithId.id)
            await updateItem(db, 'blocks', parent)
        }

        return blockWithId
    }

    return {
        getPages,
        createPage,
        getBlock,
        getBlocks,
        getPageBlocks,
        createBlock
    }
}