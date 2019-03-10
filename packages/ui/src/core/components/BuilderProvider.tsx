import React, { FunctionComponent, useReducer } from 'react'
import { Block, BlockModule, uuid } from '@compoz/core'
import { modulesRegistryContext } from '../../modulesRegistry'
import { BuilderState, builderStateContext, builderDispatchContext, builderReducer } from '../store'
import surveyHomepage from '../../samples/survey/homepage'

const aboutpage = {
    id: uuid(),
    label: 'About'
}
const defaultInitialState: BuilderState = {
    currentPageId: surveyHomepage.page.id,
    byPage: {
        [surveyHomepage.page.id]: {
            page: surveyHomepage.page,
            blocks: surveyHomepage.blocks
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
