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

export function moveNodeAt<N extends TreeNode>(nodes: N[], path: string, position: number): N[] {
    return nodes
}

export function nodeHierarchy<N extends TreeNode>(nodes: N[], node: N): HierarchyTreeNode<N> {
    return {
        ...node,
        children: getNodesById(nodes, node.children).map(node => nodeHierarchy(nodes, node))
    }
}
