import React, { FunctionComponent } from 'react'
import { Block, nodeHierarchy } from '@compoz/core'
import styled from '../../theming'
import { usePageBlocks } from '../../pages'

const Container = styled.pre`
    font-size: 12px;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    background: ${props => props.theme.backgroundColorInverted};
    color: ${props => props.theme.backgroundColor};
    margin: 0;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`

type Props = {
    block: Block<any>
}

const RawBlockData: FunctionComponent<Props> = ({ block }) => {
    const blocks = usePageBlocks()

    return <Container>{JSON.stringify(nodeHierarchy(blocks, block), null, '  ')}</Container>
}

export default RawBlockData
