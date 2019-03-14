export const openDatabase = (
    name: string,
    version: number,
    upgrade: (db: IDBDatabase) => void
): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(name, version)
        req.onerror = () => {
            reject(new Error(`an error occurred while opening database "${name}@v${version}"`))
        }
        req.onsuccess = () => {
            resolve(req.result)
        }
        req.onupgradeneeded = (event) => {
            upgrade((event.target as any).result as IDBDatabase)
        }
    })
}

export const addItem = async (db: IDBDatabase, storeName: string, item: any): Promise<void> => {
    const trx = db.transaction(storeName, 'readwrite')
    const store = trx.objectStore(storeName)

    return new Promise((resolve, reject) => {
        trx.oncomplete = () => resolve()
        trx.onerror = (event) => {
            const error = (event.target as any).error
            console.error(`an error occurred while adding item to "${storeName}" store\n> ${error.message}`, item)
            reject(new Error(error.message))
        }
        store.add(item)
    })
}

export const getItems = async (db: IDBDatabase, storeName: string): Promise<any[]> => {
    const trx = db.transaction(storeName, 'readonly')
    const store = trx.objectStore(storeName)

    let items: any[] = []

    return new Promise((resolve) => {
        const cursorReq =  store.openCursor()
        cursorReq.onsuccess = (event) => {
            const cursor = (event.target as any).result as IDBCursorWithValue | null
            if (cursor !== null) {
                if (cursor.value !== null) {
                    items.push(cursor.value)
                }
                cursor.continue()
            } else {
                resolve(items)
            }
        }
    })
}

export const getItem = async (db: IDBDatabase, storeName: string, uid: string): Promise<any> => {
    const trx = db.transaction(storeName, 'readonly')
    const store = trx.objectStore(storeName)

    return new Promise(async (resolve, reject) => {
        const req = await store.get(uid)
        trx.oncomplete = () => {
            resolve(req.result)
        }
    })
}

export const updateItem = async (db: IDBDatabase, storeName: string, item: any) => {
    const trx = db.transaction(storeName, 'readwrite')
    const store = trx.objectStore(storeName)

    return new Promise((resolve, reject) => {
        trx.oncomplete = () => resolve()
        trx.onerror = (event) => {
            const error = (event.target as any).error
            console.error(`an error occurred while updating item to "${storeName}" store\n> ${error.message}`, item)
            reject(new Error(error.message))
        }
        store.put(item)
    })
}

export const getItemsByRange = async (db: IDBDatabase, storeName: string, idxName: string, range: IDBKeyRange): Promise<any[]> => {
    const trx = db.transaction(storeName, 'readonly')
    const store = trx.objectStore(storeName)
    const idx = store.index(idxName)

    let items: any[] = []

    return new Promise((resolve) => {
        const cursorReq =  idx.openCursor(range)
        cursorReq.onsuccess = (event) => {
            const cursor = (event.target as any).result as IDBCursorWithValue | null
            if (cursor !== null) {
                if (cursor.value !== null) {
                    items.push(cursor.value)
                }
                cursor.continue()
            } else {
                resolve(items)
            }
        }
    })
}

