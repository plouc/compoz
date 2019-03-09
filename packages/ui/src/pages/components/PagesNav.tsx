import React, { FunctionComponent, useCallback } from 'react'
import styled from '../../theming'
import { useBuilderState, useBuilderDispatch } from '../../core'

const Container = styled.div`
    padding-bottom: ${props => props.theme.spacing}px;
    margin-bottom: ${props => props.theme.spacing * 2}px;
    background: ${props => props.theme.backgroundColor};
`

const Title = styled.h3`
    margin: 0;
    margin-bottom: ${props => props.theme.spacing}px;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    font-size: 14px;
`

const PageLink = styled.span<{ isCurrent: boolean }>`
    display: block;
    cursor: pointer;
    font-weight: ${props => (props.isCurrent ? '800' : 'normal')};
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`

type Props = {}

const PagesNav: FunctionComponent<Props> = () => {
    const state = useBuilderState()
    const pages = Object.keys(state.byPage).map(id => state.byPage[id].page)

    const dispatch = useBuilderDispatch()
    const setCurrentPage = useCallback(
        (pageId: string) => dispatch({ type: 'setCurrentPage', id: pageId }),
        [dispatch]
    )

    return (
        <Container>
            <Title>pages</Title>
            {pages.map(page => (
                <PageLink
                    key={page.id}
                    isCurrent={state.currentPageId === page.id}
                    onClick={() => setCurrentPage(page.id)}
                >
                    {page.label}
                </PageLink>
            ))}
        </Container>
    )
}

export default PagesNav
