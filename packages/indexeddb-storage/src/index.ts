import { Omit, Block, Page, uuid, Storage } from '@compoz/core'
import {
    openDatabase,
    listStoreItems,
    addItemToStore,
    getItemsByRange
} from './helpers'

export default (): Storage => {
    let dbCache: IDBDatabase
    const getDatabase = async (): Promise<IDBDatabase> => {
        if (dbCache !== undefined) return dbCache

        const dbInstance = await openDatabase('compoz', 1, (upgradeDb) => {
            if (!upgradeDb.objectStoreNames.contains('pages')) {
                const pagesStore = upgradeDb.createObjectStore('pages', {
                    keyPath: 'id'
                })
                pagesStore.createIndex('id', 'id', { unique: true })
                pagesStore.createIndex('label', 'label', { unique: false })
            }
    
            if (!upgradeDb.objectStoreNames.contains('blocks')) {
                const blocksStore = upgradeDb.createObjectStore('blocks', {
                    keyPath: 'id'
                })
                blocksStore.createIndex('id', 'id', { unique: true })
                blocksStore.createIndex('pageId', 'pageId', { unique: false })
                blocksStore.createIndex('type', 'type', { unique: false })
                blocksStore.createIndex('path', 'path', { unique: false })
                blocksStore.createIndex('label', 'label', { unique: false })
            }
        })

        dbCache = dbInstance

        return dbInstance
    }

    return {
        getPages: async (): Promise<Page[]> => {
            const db = await getDatabase()

            return listStoreItems(db, 'pages')
        },
        createPage: async (page: Omit<Page, 'id'>): Promise<Page> => {
            const db = await getDatabase()
            const pageWithId = {
                id: uuid(),
                ...page,
            }
            await addItemToStore(db, 'pages', pageWithId)

            return pageWithId
        },
        getPageBlocks: async (id: string): Promise<Block<any>[]> => {
            const db = await getDatabase()
            const blocks = await getItemsByRange(db, 'blocks', 'pageId', IDBKeyRange.bound(id, id))

            return blocks
        },
        createBlock: async (block: Omit<Block<any>, 'id'>, pageId?: string) => {
            const db = await getDatabase()
            const blockWithId = {
                id: uuid(),
                ...block,
            }
            await addItemToStore(db, 'blocks', { pageId, ...blockWithId })

            return blockWithId
        }
    }
}