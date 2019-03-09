import React, { FunctionComponent, useCallback, useState } from 'react'
import { Formik } from 'formik'
import { Block } from '@compoz/core'
import styled from '../../theming'
import { useBuilderDispatch } from '../../core'
import BlockAdminHeader from './BlockAdminHeader'
import BlockAdminChildren from './BlockAdminChildren'

type Props = {
    block: Block<any>
    depth: number
}

const BlockAdmin: FunctionComponent<Props> = ({ block, depth = 0 }) => {
    const dispatch = useBuilderDispatch()
    const removeBlock = useCallback(() => dispatch({ type: 'removeBlock', path: block.path }), [
        dispatch,
        block.path
    ])
    const [isHover, setIsHover] = useState(false)

    const isRoot = block.path === '0'

    return (
        <>
            <Formik initialValues={block} enableReinitialize={true} onSubmit={d => console.log(d)}>
                <BlockContainer isRoot={isRoot} isCurrent={false} depth={depth}>
                    <BlockAdminHeader
                        type={block.type}
                        id={block.id}
                        label={block.label}
                        removeBlock={isRoot ? undefined : removeBlock}
                        isCollapsed={false}
                        toggle={() => {}}
                        isHover={isHover}
                        setIsHover={setIsHover}
                    />
                </BlockContainer>
            </Formik>
            {true && <BlockAdminChildren block={block} depth={depth} shouldAddChild={isHover} />}
        </>
    )
}

export default BlockAdmin

const BlockContainer = styled.div<{
    isRoot: boolean
    isCurrent: boolean
    depth: number
}>`
    background: ${props => props.theme.backgroundColor};
    padding-left: ${props => props.depth * props.theme.spacing * 4}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    transition: background 200ms;

    &:hover {
        background: #f6f6f6;
    }
`
