import React, { FunctionComponent, useState } from 'react'
import styled from '../../theming'
import { PagesNav, PageAdmin } from '../../pages'
import { useBuilderState } from '../store'
import Import from './Import'

const BuilderView: FunctionComponent = () => {
    const state = useBuilderState()
    const [mode, setMode] = useState<'page' | 'import'>('import')

    return (
        <Container>
            <Sidebar>
                <Logo>compoz</Logo>
                <PagesNav setPageMode={() => setMode('page')} />
                <ImportButton onClick={() => setMode('import')}>Import</ImportButton>
            </Sidebar>
            {mode === 'page' && state.currentPageId !== null && <PageAdmin />}
            {mode === 'import' && <Import/>}
        </Container>
    )
}

export default BuilderView

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 220px auto;
    grid-template-rows: minmax(0, 1fr);
    overflow: hidden;
`

const Sidebar = styled.div`
    border-right: 1px solid ${props => props.theme.borderColor};
`

const Logo = styled.div`
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`

const ImportButton = styled.div`
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    display: flex;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    font-weight: 600;
    cursor: pointer;
`