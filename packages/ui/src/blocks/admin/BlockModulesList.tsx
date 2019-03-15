import React, { FunctionComponent } from 'react'
import styled from '../../theming'
import { useModulesRegistry } from '../../modulesRegistry'
import { colorByBlockType } from '../../core/helpers'
import BlockIcon from './BlockIcon'

type Props = {}

const BlockModulesList: FunctionComponent<Props> = () => {
    const modules = useModulesRegistry()

    return (
        <div>
            <Title>Block Modules</Title>
            <Intro>
                The following modules are currently enabled
            </Intro>
            {Object.keys(modules).map(moduleName => {
                const module = modules[moduleName]
                const version = module.version
                    ? <span> v{module.version}</span>
                    : null

                return (
                    <Item key={moduleName}>
                        <Icon style={{ background: colorByBlockType(moduleName) }}>
                            <BlockIcon type={moduleName} size={18} color="#ffffff"/>
                        </Icon>
                        <Name>{moduleName}{version}</Name>
                        {module.description && (
                            <Description>
                                {module.description}
                            </Description>
                        )}
                    </Item>
                )
            })}
        </div>
    )
}

export default BlockModulesList

const Title = styled.h1`
    margin: 0;
    font-size: 18px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 3}px;
`

const Intro = styled.div`
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 3}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const Item = styled.div`
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 3}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    display: grid;
    grid-template-columns: 28px auto;
    grid-column-gap: ${props => props.theme.spacing * 2}px;
    grid-row-gap: ${props => props.theme.spacing}px;
`

const Icon = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
`

const Name = styled.h2`
    font-size: 14px;
    margin: 0;
    align-self: center;
`

const Description = styled.div`
    grid-column-start: 2;
`