import React, { FunctionComponent, useCallback, useMemo, Fragment, useState } from 'react'
import { Omit, getNodesById, Block, BlockModulesMap } from '@compoz/core'
import { usePageBlocks } from '../../pages'
import { useModulesRegistry } from '../../modulesRegistry'
import AddBlockButton from './AddBlockButton'
import BlockAdmin from './BlockAdmin'
import CreateBlock from './CreateBlock'

type Props = {
    block: Block<any>
    depth: number
    shouldAddChild: boolean
}

const BlockChildren: FunctionComponent<Props> = ({ block, depth, shouldAddChild }) => {
    const blocks = usePageBlocks()
    const registry = useModulesRegistry()
    const module = registry[block.type]
    const allowedChildModules: BlockModulesMap = useMemo(() => {
        if (module.shouldAddChild(block) === false) return {}

        return Object.keys(registry).reduce(
            (childModules, moduleName) => {
                const m = registry[moduleName]
                if (m.shouldBeAdded(block)) {
                    return {
                        ...childModules,
                        [moduleName]: m
                    }
                }
                return childModules
            },
            {} as BlockModulesMap
        )
    }, [block])
    const [creatingType, setCreatingType] = useState<{ type: string | null; position: number }>({
        type: null,
        position: 0
    })
    const creatingBlock = useMemo((): Omit<Block<any>, 'id'> | null => {
        if (creatingType.type === null) return null

        const creatingModule = registry[creatingType.type]
        return {
            path: '',
            label: creatingModule.defaults.label,
            type: creatingType.type,
            tags: [],
            children: [],
            settings: creatingModule.defaults.settings || {}
        }
    }, [creatingType, registry])
    const childBlocks = useMemo(() => getNodesById(blocks, block.children), [
        blocks,
        block.children
    ])
    const cancel = useCallback(() => setCreatingType({ type: null, position: 0 }), [])

    if (Object.keys(allowedChildModules).length === 0) {
        return null
    }

    return (
        <>
            {(creatingBlock === null || creatingType.position !== 0) && (
                <AddBlockButton
                    parent={block}
                    depth={depth}
                    onSelectType={(type: string) => setCreatingType({ type, position: 0 })}
                    modules={allowedChildModules}
                />
            )}
            {creatingBlock !== null && creatingType.position === 0 && (
                <CreateBlock
                    block={creatingBlock}
                    parentId={block.id}
                    position={0}
                    onSave={() => setCreatingType({ type: null, position: 0 })}
                />
            )}
            {childBlocks.map((child, index) => (
                <Fragment key={child.id}>
                    <BlockAdmin block={child} depth={depth + 1} />
                    {(creatingBlock === null || creatingType.position !== index + 1) && (
                        <AddBlockButton
                            parent={block}
                            depth={depth}
                            onSelectType={(type: string) =>
                                setCreatingType({ type, position: index + 1 })
                            }
                            modules={allowedChildModules}
                        />
                    )}
                    {creatingBlock !== null && creatingType.position === index + 1 && (
                        <CreateBlock
                            block={creatingBlock}
                            parentId={block.id}
                            position={index + 1}
                            onSave={() => setCreatingType({ type: null, position: 0 })}
                        />
                    )}
                </Fragment>
            ))}
        </>
    )
}

export default BlockChildren
