# compoz

**compoz** is a page builder, it abstracts the creation of Pages composed of Blocks.
It provides an UI to configure the Pages & Blocks.
Pages and Blocks are stored inside a Storage.
The configuration and rendering of Blocks is driven by BlockModules.

## The model

The `page` interface:

```typescript
interface Page {
    /**
     * Page's unique identifier, should be generated
     * by the Storage.
     */
    id: string
    /**
     * Page display name.
     */
    label: string
    /**
     * Page root block identifier.
     */
    rootBlockId: string
}
```

The `block` interface:

```typescript
interface Block<T, Settings = any> {
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
     * @see BlockModule.shouldBeAdded
     */
    children: string[]
}
```

`Block` is a generic interface, `settings` depends on the block type.

## Modules

Modules are used to augment the ability of **compoz**,
They must conform to the following interface:

```typescript
interface BlockModule<B extends Block<any> = Block<any>> {
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
```

**compoz** provides few pre-made modules:

- `@compoz/api-call-block-module`
- `@compoz/bar-chart-block-module`
- `@compoz/container-block-module`
- `@compoz/json-block-module`
- `@compoz/markdown-block-module`
- `@compoz/pie-chart-block-module`
- `@compoz/proxy-block-module`
