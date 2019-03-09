import { Omit, uuid } from './helpers'

const PathDelimiter: '/' = '/'

export interface TreeNode {
    id: string
    path: string
    children: string[]
}

export interface HierarchyTreeNode<N extends TreeNode> {
    children: HierarchyTreeNode<N>[]
}

export function getNodeById<N extends TreeNode>(nodes: N[], id: string): N {
    const node = nodes.find(n => n.id === id)
    if (node === undefined) {
        throw new Error(`no node found for id: ${id}`)
    }

    return node
}

export function getNodesById<N extends TreeNode>(nodes: N[], ids: string[]): N[] {
    return ids.map(id => getNodeById(nodes, id))
}

export function getNodeByPath<N extends TreeNode>(nodes: N[], path: string): N {
    const node = nodes.find(n => n.path === path)
    if (node === undefined) {
        throw new Error(`no node found at path: ${path}`)
    }

    return node
}

export function getNodesByPath<N extends TreeNode>(nodes: N[], paths: string[]): N[] {
    return paths.map(path => getNodeByPath(nodes, path))
}

export function parentPath(path: string) {
    const pathChunks = path.split(PathDelimiter)
    pathChunks.pop()

    return pathChunks.join(PathDelimiter)
}

export function fixPaths<N extends TreeNode>(nodes: N[]): N[] {
    const fixedNodes: N[] = [...nodes]
    const mapping: {
        [id: string]: string
    } = {}
    nodes.forEach(node => {
        if (node.children.length === 0) return
        node.children.forEach(childId => {})
    })

    return fixedNodes
    /*
    const parentNode = getNodeByPath<N>(nodes, path)
    if (parentNode.children.length === 0) return nodes

    const newChildren: string[] = []
    const mapping: { [old: string]: string } = {}

    parentNode.children.forEach((oldPath, position) => {
        const path = oldPath.split(PathDelimiter)
        path.pop()
        path.push(`${position}`)
        const newPath = path.join(PathDelimiter)

        newChildren.push(newPath)
        if (newPath !== oldPath) {
            mapping[oldPath] = newPath
        }
    })
    const pathsToReplace = Object.keys(mapping)

    return nodes.map(node => {
        if (node.path === parentNode.path) {
            return {
                ...node,
                children: newChildren
            }
        }

        const pathNeedReplacement = pathsToReplace.some(p => node.path.startsWith(p))
        const childrenNeedReplacement = node.children.some(child =>
            pathsToReplace.some(p => child.startsWith(p))
        )

        if (!pathNeedReplacement && !childrenNeedReplacement) {
            return node
        }

        const mappedNode = { ...node }
        if (pathNeedReplacement) {
            pathsToReplace.forEach(p => {
                if (node.path.startsWith(p)) {
                    mappedNode.path = mappedNode.path.replace(p, mapping[p])
                }
            })
        }

        if (childrenNeedReplacement) {
            mappedNode.children = mappedNode.children.map(child => {
                let newChildPath = child
                pathsToReplace.forEach(p => {
                    if (child.startsWith(p)) {
                        newChildPath = child.replace(p, mapping[p])
                    }
                })

                return newChildPath
            })
        }

        return mappedNode
    })
    */
}

export function insertChild<N extends TreeNode>(
    nodes: N[],
    id: string,
    position: number,
    node: Omit<N, 'id' | 'path'>
): N[] {
    const parent = getNodeById(nodes, id)
    const newPath = `${parent.path}${PathDelimiter}?`
    const newNode: N = {
        ...node,
        id: uuid(),
        path: newPath
    } as N

    const newChildren = [...parent.children]
    newChildren.splice(position, 0, newNode.id)

    const updatedNodes = [
        ...nodes.filter(n => n.id !== parent.id),
        {
            ...parent,
            children: newChildren
        },
        newNode
    ]

    return fixPaths(updatedNodes)
}

export function moveNodeAt<N extends TreeNode>(nodes: N[], path: string, position: number): N[] {
    return nodes
}

export function removeNodeById<N extends TreeNode>(nodes: N[], id: string): N[] {
    const nodeToRemove = getNodeById(nodes, id)
    const pathsToRemove = nodes
        .filter(node => node.path.startsWith(nodeToRemove.path))
        .map(node => node.path)

    const filteredNodes = nodes
        .filter(node => !pathsToRemove.includes(node.path))
        .map(node => {
            return {
                ...node,
                children: node.children.filter(path => !pathsToRemove.includes(path))
            }
        })

    return fixPaths(filteredNodes)
}

export function nodeHierarchy<N extends TreeNode>(nodes: N[], node: N): HierarchyTreeNode<N> {
    return {
        ...node,
        children: getNodesById(nodes, node.children).map(node => nodeHierarchy(nodes, node))
    }
}
