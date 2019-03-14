import { createContext, useContext, useMemo, Dispatch } from 'react'
import { Storage } from '@compoz/core'
import { BuilderState } from './state'
import { BuilderAction } from './actions'

export const storageContext = createContext<Storage>({} as any)

export const useStorage = () => useContext(storageContext)

export const builderStateContext = createContext<BuilderState>({
    currentPageId: null,
    pageCreation: {
        isCreating: false,
    },
    pagesIds: {
        items: [],
        isFetching: false,
        isStale: true
    },
    pageById: {},
    blockCreation: {
        isCreating: false
    },
    blockById: {}
})

export const useBuilderState = () => useContext(builderStateContext)

export const builderDispatchContext = createContext((() => 0) as Dispatch<BuilderAction>)

export const useBuilderDispatch = () => useContext(builderDispatchContext)

export const useDispatchBinding = (
    fn: (
        dispatch: Dispatch<BuilderAction>,
        state: BuilderState,
        storage: Storage
    ) => (...args: any[]) => void
) => {
    const dispatch = useBuilderDispatch()
    const state = useBuilderState()
    const storage = useStorage()
    const bound = useMemo(
        () => fn(dispatch, state, storage),
        [dispatch, state, storage]
    )

    return bound
}
