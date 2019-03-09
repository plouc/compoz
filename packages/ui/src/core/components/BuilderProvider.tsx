import React, { FunctionComponent, useReducer } from 'react'
import { Block, BlockModule, uuid } from '@compoz/core'
import { modulesRegistryContext } from '../../modulesRegistry'
import { BuilderState, builderStateContext, builderDispatchContext, builderReducer } from '../store'

const homepage = {
    id: uuid(),
    label: 'Home'
}
const homepageBlocks = []
homepageBlocks.push({
    type: 'markdown',
    id: uuid(),
    path: '0/0',
    label: 'Introduction',
    tags: [],
    children: [],
    settings: {
        content: `## Introduction

Lorem ipsum **dolor sit amet**, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

> Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.

Duis aute **irure dolor** in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/1',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/2',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/3',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/4',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/5',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/6',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'apiCall',
    id: uuid(),
    path: '0/7',
    label: 'API Call',
    tags: [],
    children: [],
    settings: {
        method: 'GET'
    }
})
homepageBlocks.push({
    type: 'container',
    id: uuid(),
    path: '0',
    label: 'Root',
    tags: [],
    children: [
        homepageBlocks[0].id,
        homepageBlocks[1].id,
        homepageBlocks[2].id,
        homepageBlocks[3].id,
        homepageBlocks[4].id,
        homepageBlocks[5].id,
        homepageBlocks[6].id,
        homepageBlocks[7].id,
        homepageBlocks[8].id,
        homepageBlocks[9].id,
        homepageBlocks[10].id,
        homepageBlocks[11].id,
        homepageBlocks[12].id,
        homepageBlocks[13].id,
        homepageBlocks[14].id,
        homepageBlocks[15].id,
    ],
    settings: {}
})
const aboutpage = {
    id: uuid(),
    label: 'About'
}
const defaultInitialState: BuilderState = {
    currentPageId: homepage.id,
    byPage: {
        [homepage.id]: {
            page: homepage,
            blocks: homepageBlocks
        },
        [aboutpage.id]: {
            page: aboutpage,
            blocks: [
                {
                    type: 'container',
                    id: uuid(),
                    path: '0',
                    label: 'Root',
                    tags: [],
                    children: [],
                    settings: {}
                }
            ]
        }
    }
}

const BuilderProvider: FunctionComponent<{
    modules: {
        [key: string]: BlockModule<Block<any>>
    }
    initialState?: BuilderState
}> = ({ children, modules, initialState = defaultInitialState }) => {
    const [state, dispatch] = useReducer(builderReducer, initialState)

    return (
        <modulesRegistryContext.Provider value={modules}>
            <builderDispatchContext.Provider value={dispatch}>
                <builderStateContext.Provider value={state}>
                    {children}
                </builderStateContext.Provider>
            </builderDispatchContext.Provider>
        </modulesRegistryContext.Provider>
    )
}

export default BuilderProvider
