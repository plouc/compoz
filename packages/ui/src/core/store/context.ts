import { createContext, useContext, Dispatch } from 'react'
import { BuilderState } from './state'
import { BuilderAction } from './actions'

export const builderStateContext = createContext<BuilderState>({
    currentPageId: '',
    byPage: {}
})

export const useBuilderState = () => useContext(builderStateContext)

export const builderDispatchContext = createContext((() => 0) as Dispatch<BuilderAction>)

export const useBuilderDispatch = () => useContext(builderDispatchContext)
