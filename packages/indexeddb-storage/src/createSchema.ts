export const createSchema = (db: IDBDatabase) => {
    if (!db.objectStoreNames.contains('pages')) {
        const pagesStore = db.createObjectStore('pages', {
            keyPath: 'id'
        })
        pagesStore.createIndex('id', 'id', { unique: true })
        pagesStore.createIndex('label', 'label', { unique: false })
        pagesStore.createIndex('rootBlockId', 'rootBlockId', { unique: false })
    }

    if (!db.objectStoreNames.contains('pageBlocks')) {
        const pageBlocksStore = db.createObjectStore('pageBlocks', {
            keyPath: ['pageId', 'blockId']
        })
        pageBlocksStore.createIndex('path', 'path', { unique: true })
    }

    if (!db.objectStoreNames.contains('blocks')) {
        const blocksStore = db.createObjectStore('blocks', {
            keyPath: 'id'
        })
        blocksStore.createIndex('id', 'id', { unique: true })
        blocksStore.createIndex('pageId', 'pageId', { unique: false })
        blocksStore.createIndex('type', 'type', { unique: false })
        blocksStore.createIndex('label', 'label', { unique: false })
    }
}