import { createContext, useContext } from 'react'
import { Block, BlockModule, BlockConfigurator, BlockRenderer } from '@compoz/core'

export const modulesRegistryContext = createContext<{
    [key: string]: BlockModule<Block<any>>
}>({})

export const useModulesRegistry = () => useContext(modulesRegistryContext)

export const useModule = (type: string): BlockModule<Block<any>> => {
    const registry = useModulesRegistry()
    if (registry[type] === undefined) {
        throw new Error(`no module available to handle block type: ${type}`)
    }

    return registry[type]
}

export const useModuleConfigurator = (type: string): BlockConfigurator<Block<any>> => {
    const module = useModule(type)

    return module.configurator
}

export const useModuleRenderer = (type: string): BlockRenderer<Block<any>> => {
    const module = useModule(type)

    return module.renderer
}
