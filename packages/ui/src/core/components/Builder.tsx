import React, { FunctionComponent } from 'react'
import { Block, BlockModule, Storage } from '@compoz/core'
import { ThemeProvider, defaultTheme, GlobalStyle } from '../../theming'
import BuilderProvider from './BuilderProvider'
import BuilderView from './BuilderView'

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
        storage: Storage
    }> = ({ modules, storage }) => {
        return (
            <BuilderProvider modules={modules} storage={storage}>
                <ThemeProvider theme={defaultTheme}>
                    <>
                        <GlobalStyle />
                        <BuilderView />
                    </>
                </ThemeProvider>
            </BuilderProvider>
        )
    }

    return BoundBuilder
}

export default Builder
