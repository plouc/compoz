# compoz

## The model

The `page` interface:

```typescript
interface Page {
    id: string
    label: string
}
```

The `block` interface:

```typescript
interface Block<T, Settings = any> {
    type: T
    id: string
    path: string
    label: string
    tags: string[]
    children: string[]
    settings: Settings
}
```

`Block` is a generic interface, `settings` depends on the block type.

## Modules

Modules are used to augment the ability of **compoz**,
They must conform to the following interface:

```
```

**compoz** provides few pre-made modules:

- `@compoz/api-call-block-module`
- `@compoz/bar-chart-block-module`
- `@compoz/container-block-module`
- `@compoz/json-block-module`
- `@compoz/markdown-block-module`
- `@compoz/pie-chart-block-module`
- `@compoz/proxy-block-module`
