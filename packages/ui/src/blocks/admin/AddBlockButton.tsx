import React, { FunctionComponent, memo, useState, useCallback } from 'react'
import { Plus } from 'react-feather'
import { BlockModulesMap, Block } from '@compoz/core'
import styled, { unselectable } from '../../theming'
import BlockIcon from './BlockIcon'

type Props = {
    parent: Block<any>
    onSelectType: (type: string) => void
    modules: BlockModulesMap
    depth: number
}

const AddBlockButton: FunctionComponent<Props> = memo(
    ({ onSelectType, modules, parent, depth }) => {
        const [isAdding, setIsAdding] = useState(false)
        const [isHover, setIsHover] = useState(false)
        const toggle = useCallback(() => setIsAdding(!isAdding), [isAdding])

        return (
            <>
                <Button isAdding={isAdding}>
                    <Icon
                        onClick={() => toggle()}
                        isAdding={isAdding}
                        depth={depth}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <Plus size={18} />
                    </Icon>
                    <Label depth={depth} show={isHover}>
                        <span>
                            add block to <strong>{parent.label}</strong>
                        </span>
                    </Label>
                </Button>
                {isAdding && (
                    <Icons>
                        {Object.keys(modules).map(type => {
                            return (
                                <IconButton key={type} onClick={() => onSelectType(type)}>
                                    <BlockIcon type={type} size={24} />
                                    <span>{type}</span>
                                </IconButton>
                            )
                        })}
                    </Icons>
                )}
            </>
        )
    }
)

export default AddBlockButton

const Icon = styled.div<{ isAdding: boolean; depth: number }>`
    width: ${props => props.theme.spacing * 4}px;
    height: ${props => props.theme.spacing * 4}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => props.theme.spacing * -2}px;
    left: ${props => props.theme.spacing * 4 * (props.depth + 1) + props.theme.spacing}px;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    border-radius: ${props => props.theme.spacing * 2}px;
    transform: scale3d(0.7, 0.7, 1) rotate(${props => (props.isAdding ? '135' : '0')}deg);
    transform-origin: center center;
    transition: transform 200ms;
    z-index: 100;
    border: 1px solid ${props => props.theme.borderColor};
    cursor: pointer;
    ${unselectable}

    &:hover {
        transform: scale3d(1, 1, 1) rotate(${props => (props.isAdding ? '135' : '0')}deg);
    }
`

const Label = styled.span<{ depth: number; show: boolean }>`
    position: absolute;
    background: red;
    font-size: 12px;
    height: ${props => props.theme.spacing * 3}px;
    top: ${props => props.theme.spacing * -1.5}px;
    left: ${props => props.theme.spacing * 4 * (props.depth + 1) + props.theme.spacing * 6}px;
    z-index: 200;
    display: flex;
    align-items: center;
    padding: 0 ${props => props.theme.spacing}px;
    background: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 2px;
    pointer-events: none;
    transition: transform 200ms, opacity 200ms;
    opacity: ${props => (props.show ? '1' : '0')};
    transform: translate3d(${props => (props.show ? '0' : '16px')}, 0, 0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`

const Button = styled.div<{ isAdding: boolean }>`
    height: 0;
    position: relative;
`

const Icons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 160px);
    grid-auto-rows: 42px;
    grid-column-gap: ${props => props.theme.spacing}px;
    grid-row-gap: ${props => props.theme.spacing}px;
    padding: ${props => props.theme.spacing * 2}px;
    background: ${props => props.theme.borderColor};
`

const IconButton = styled.div`
    background: ${props => props.theme.backgroundColor};
    display: grid;
    grid-template-columns: 42px auto;
    cursor: pointer;
    align-items: center;
    justify-items: center;
    font-size: 12px;
    font-weight: 600;
    border-radius: 2px;
    color: #888;

    & span {
        justify-self: start;
    }

    &:hover {
        color: black;
    }
`
