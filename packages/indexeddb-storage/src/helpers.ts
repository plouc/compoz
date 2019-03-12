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

export const addItemToStore = async (db: IDBDatabase, name: string, item: any): Promise<void> => {
    const trx = db.transaction(name, 'readwrite')
    const store = trx.objectStore(name)

    return new Promise((resolve, reject) => {
        trx.oncomplete = () => resolve()
        trx.onerror = (event) => {
            const error = (event.target as any).error
            console.error(`an error occurred while adding item to "${name}" store\n> ${error.message}`, item)
            reject(new Error(error.message))
        }
        store.add(item)
    })
}

export const listStoreItems = async (db: IDBDatabase, name: string): Promise<any[]> => {
    const trx = db.transaction(name, 'readonly')
    const store = trx.objectStore(name)

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

export const getStoreItem = async (db: IDBDatabase, name: string, uid: string): Promise<any[]> => {
    const trx = db.transaction(name, 'readonly')
    const store = trx.objectStore(name)

    return new Promise(async (resolve, reject) => {
        const req = await store.get(uid)
        trx.oncomplete = () => {
            resolve(req.result)
        }
    })
}

export const getItemsByRange = async (db: IDBDatabase, name: string, idxName: string, range: IDBKeyRange): Promise<any[]> => {
    const trx = db.transaction(name, 'readonly')
    const store = trx.objectStore(name)
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

