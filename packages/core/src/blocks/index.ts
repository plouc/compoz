import { FunctionComponent, ComponentType } from 'react'
import { Icon as IconProps } from 'react-feather'
import { Omit } from '../helpers'

export interface Block<T, Settings = any> {
    type: T
    id: string
    path: string
    label: string
    tags: string[]
    children: string[]
    settings: Settings
}

export type BlockRenderer<B extends Block<any>> = FunctionComponent<{ block: B; parent?: B }>
export type BlockConfigurator<B extends Block<any>> = FunctionComponent<{
    block: Omit<B, 'id'> & { id?: string }
    mode: 'create' | 'edit'
}>

export interface BlockModule<B extends Block<any> = Block<any>> {
    schema: any
    defaults: {
        label: string
        settings?: any
    }
    icon: FunctionComponent<IconProps> | ComponentType<IconProps>
    renderer: BlockRenderer<B>
    configurator: BlockConfigurator<B>
    shouldAddChild: (block: B) => boolean
    shouldBeAdded: (parent: Block<any>) => boolean
}

export type BlockModulesMap = {
    [k: string]: BlockModule
}
