import React, { ReactNode, FunctionComponent, CSSProperties } from 'react'
import { Icon } from 'react-feather'
import styled, { unselectable } from '../../theming'

type Props = {
    items: Array<{
        id: string
        label: ReactNode
        icon?: Icon
    }>
    currentId: string
    onChange: (id: string) => void
    style?: CSSProperties
}

const TabsNav: FunctionComponent<Props> = ({ items, currentId, onChange, style }) => {
    return (
        <Container style={style}>
            {items.map(item => {
                return (
                    <Item
                        key={item.id}
                        isCurrent={item.id === currentId}
                        hasIcon={item.icon !== undefined}
                        onClick={() => onChange(item.id)}
                    >
                        {item.icon !== undefined && React.createElement(item.icon, { size: 20 })}
                        {item.label}
                    </Item>
                )
            })}
        </Container>
    )
}

export default TabsNav

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.backgroundColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const Item = styled.span<{ isCurrent: boolean; hasIcon: boolean }>`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: ${props => (props.hasIcon ? '24px 90px' : '90px')};
    grid-column-gap: ${props => props.theme.spacing}px;
    font-size: 12px;
    font-weight: 700;
    padding: ${props => props.theme.spacing * 1.5}px ${props => props.theme.spacing * 2}px;
    cursor: pointer;
    color: ${props => (props.isCurrent ? props.theme.accentColor : 'inherit')};
    box-shadow: 0 -3px ${props => (props.isCurrent ? props.theme.accentColor : 'rgba(0, 0, 0, 0)')} inset;
    margin-bottom: -1px;
    text-transform: uppercase;
    ${unselectable}

    &:hover {
        box-shadow: 0 -3px ${props =>
                props.isCurrent ? props.theme.accentColor : props.theme.textColor} inset;
    }
`
