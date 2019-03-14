import React, { FunctionComponent, useReducer } from 'react'
import { Block, BlockModule, Storage } from '@compoz/core'
import { modulesRegistryContext } from '../../modulesRegistry'
import {
    BuilderState,
    builderStateContext,
    builderDispatchContext,
    builderReducer,
    storageContext
} from '../store'

const defaultInitialState: BuilderState = {
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
        isCreating: false,
    },
    blockById: {},
}

const BuilderProvider: FunctionComponent<{
    modules: {
        [key: string]: BlockModule<Block<any>>
    }
    storage: Storage
    initialState?: BuilderState
}> = ({ children, modules, storage, initialState = defaultInitialState }) => {
    const [state, dispatch] = useReducer(builderReducer, initialState)

    return (
        <modulesRegistryContext.Provider value={modules}>
            <builderDispatchContext.Provider value={dispatch}>
                <storageContext.Provider value={storage}>
                    <builderStateContext.Provider value={state}>
                        {children}
                    </builderStateContext.Provider>
                </storageContext.Provider>
            </builderDispatchContext.Provider>
        </modulesRegistryContext.Provider>
    )
}

export default BuilderProvider
