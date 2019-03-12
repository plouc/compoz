import React, { FunctionComponent } from 'react'
import styled from '../../theming'
import { useBuilderState, useDispatchBinding } from '../../core'
import { fetchPagesIfNeeded, usePages, setCurrentPage } from '../store'
import PageQuickCreation from './PageQuickCreation'

type Props = {
    setPageMode: () => void
}

const PagesNav: FunctionComponent<Props> = ({ setPageMode }) => {
    const { currentPageId, pagesIds: { isFetching } } = useBuilderState()
    const fetchPages = useDispatchBinding(fetchPagesIfNeeded)
    const setCurrent = useDispatchBinding(setCurrentPage)
    const pages = usePages()
    fetchPages()

    return (
        <Container>
            <Title>pages</Title>
            <PageQuickCreation />
            {isFetching && <div>...</div>}
            {!isFetching && pages.map(page => (
                <PageLink
                    key={page.id}
                    isCurrent={currentPageId === page.id}
                    onClick={() => {
                        setCurrent(page.id)
                        setPageMode()
                    }}
                >
                    {page.label}
                </PageLink>
            ))}
        </Container>
    )
}

export default PagesNav

const Container = styled.div`
    border-top: 1px solid ${props => props.theme.borderColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
    background: ${props => props.theme.backgroundColor};
`

const Title = styled.h3`
    text-transform: uppercase;
    margin: 0;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    font-size: 12px;
`

const PageLink = styled.span<{ isCurrent: boolean }>`
    display: block;
    cursor: pointer;
    font-weight: ${props => (props.isCurrent ? '800' : 'normal')};
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`
