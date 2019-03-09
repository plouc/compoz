import React, { FunctionComponent, memo } from 'react'
import { Trash2, ChevronUp, ChevronDown } from 'react-feather'
import { Field, FieldProps } from 'formik'
import styled from '../../theming'
import BlockIcon from './BlockIcon'

const Header = styled.header<{ isHover: boolean }>`
    display: grid;
    grid-template-columns: 36px auto 120px;
    align-items: center;
    padding: ${props => props.theme.spacing * 3}px ${props => props.theme.spacing * 2}px;
`

const Title = styled.div<{ isHover: boolean }>`
    margin: 0;
    display: flex;
    align-items: center;
    color: inherit;
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    top: ${props => props.theme.spacing}px;
    right: ${props => props.theme.spacing}px;
    background: ${props => props.theme.backgroundColor};
`

const Button = styled.span`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing * 0.6}px ${props => props.theme.spacing}px;
    line-height: 1em;

    &:hover {
        background: ${props => props.theme.textColor};
        color: ${props => props.theme.backgroundColor};
        cursor: pointer;
    }
`

const Input = styled.input`
    font-size: 14px;
    font-weight: 600;
    padding: ${props => props.theme.spacing * 0.6}px 0;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    color: inherit;

    &:focus,
    &:hover {
        outline: 0;
        border-bottom-color: ${props => props.theme.borderColor};
    }
`

type Props = {
    type: string
    id: string
    label: string
    removeBlock?: () => void
    isCollapsed: boolean
    toggle: () => void
    isHover: boolean
    setIsHover: (flag: boolean) => void
}

const BlockAdminHeader: FunctionComponent<Props> = memo(
    ({ type, id, removeBlock, isCollapsed, toggle, isHover, setIsHover }) => (
        <Header
            isHover={isHover}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <BlockIcon type={type} size={20} />
            <Title isHover={isHover}>
                <Field
                    name="label"
                    render={({ field, form }: FieldProps<{ label: string }>) => (
                        <div>
                            <Input type="text" {...field} />
                            {form.touched.label && form.errors.label && form.errors.label}
                        </div>
                    )}
                />
            </Title>
            <Actions>
                {removeBlock && (
                    <Button onClick={removeBlock}>
                        <Trash2 size={14} />
                        &nbsp; remove
                    </Button>
                )}
                <Button onClick={toggle}>
                    {isCollapsed && (
                        <>
                            <ChevronDown size={14} />
                        </>
                    )}
                    {!isCollapsed && (
                        <>
                            <ChevronUp size={14} />
                        </>
                    )}
                </Button>
            </Actions>
        </Header>
    )
)

export default BlockAdminHeader
