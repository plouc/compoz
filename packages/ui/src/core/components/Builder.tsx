import React, { FunctionComponent } from 'react'
import { Block, BlockModule } from '@compoz/core'
import styled, { ThemeProvider, defaultTheme, GlobalStyle } from '../../theming'
import BuilderProvider from './BuilderProvider'
import { PagesNav, PageAdmin } from '../../pages'

type Modules<BlocksMap> = {
    [ModuleName in keyof BlocksMap]: BlocksMap[ModuleName] extends Block<ModuleName, infer S>
        ? BlockModule<Block<ModuleName, S>>
        : never
}

const Builder = function<
    BlocksMap extends {
        [BlockType in keyof BlocksMap]: BlocksMap[BlockType] extends Block<BlockType, infer S>
            ? Block<BlockType, S>
            : never
    }
>() {
    const BoundBuilder: FunctionComponent<{
        modules: Modules<BlocksMap>
    }> = ({ modules }) => {
        return (
            <BuilderProvider modules={modules}>
                <ThemeProvider theme={defaultTheme}>
                    <>
                        <GlobalStyle />
                        <Container>
                            <Sidebar>
                                <Logo>azap</Logo>
                                <PagesNav />
                            </Sidebar>
                            <PageAdmin />
                        </Container>
                    </>
                </ThemeProvider>
            </BuilderProvider>
        )
    }

    return BoundBuilder
}

export default Builder

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 260px auto;
    grid-template-rows: minmax(0, 1fr);
    overflow: hidden;
`

const Sidebar = styled.div`
    border-right: 1px solid ${props => props.theme.borderColor};
`

const Logo = styled.div`
    font-weight: 900;
    font-size: 18px;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`
