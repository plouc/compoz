import { FunctionComponent, ComponentType } from 'react'
import { Icon as IconProps } from 'react-feather'
import { Omit } from '../helpers'

export interface Block<T, Settings = any> {
    /**
     * The type must be unique, you cannot have two
     * similar types in a single application
     * as this field is used as a discriminator
     * to determine which configurator/renderer
     * to use.
     */
    type: T
    /**
     * Block's unique identifier, should be generated
     * by the Storage.
     */
    id: string
    /**
     * Block display name.
     */
    label: string
    /**
     * You can add tags to a block, it helps finding blocks
     * having a specific purpose.
     */
    tags: string[]
    /**
     * Settings depends on the block type.
     */
    settings: Settings
    /**
     * Child blocks, not all block types support children.
     * It depends on the module the block depends on.
     * @see BlockModule.shouldAddChild
     */
    children: string[]
}

export type BlockRenderer<B extends Block<any>> = FunctionComponent<{
    block: B
    parent?: B
    parentContext: any
    pageContext: any
}>
export type BlockConfigurator<B extends Block<any>> = FunctionComponent<{
    block: Omit<B, 'id'> & { id?: string }
    mode: 'create' | 'edit'
}>

export interface BlockModule<B extends Block<any> = Block<any>> {
    /**
     * Briefly explain the functionnality of the module.
     * Should be extracted from `package.json` `description` field.
     */
    description: string
    /**
     * Expose the version of the package.
     * Should be extracted from `package.json` `version` field.
     */
    version: string
    schema: any
    /**
     * Those values are used to pre-populate
     * the block's values when creating a new one.
     */
    defaults: {
        label: string
        settings?: any
    }
    /**
     * Must return a component used to visually
     * identify the block type easily.
     */
    icon: FunctionComponent<{
        size?: number | string
        color?: string
    }> | ComponentType<{
        size?: number | string
        color?: string
    }>
    /**
     * Defines the block's admin UI component.
     */
    configurator: BlockConfigurator<B>
    /**
     * Defines the block's rendering component
     */
    renderer: BlockRenderer<B>
    /**
     * Determine if we're allowed to add a child for
     * this type of block.
     */
    shouldAddChild: (block: B) => boolean
    /**
     * Determine if we're allowed to add this type
     * of block, can be customized according to the
     * parent we're trying to add this block to.
     */
    shouldBeAdded: (parent: Block<any>) => boolean
}

export type BlockModulesMap = {
    [k: string]: BlockModule
}
