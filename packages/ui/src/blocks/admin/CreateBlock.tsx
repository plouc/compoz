import React, { FunctionComponent, useCallback } from 'react'
import { Field, FieldProps } from 'formik'
import { Omit, Block } from '@compoz/core'
import { useBuilderDispatch } from '../../core'
import styled from '../../theming'
import BlockIcon from './BlockIcon'
import BlockAdminForm from './BlockAdminForm'

const Container = styled.div`
    background: #f6f6f6;
`

const Header = styled.header`
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    display: grid;
    grid-template-columns: 36px auto;
    align-items: center;
`

const LabelInput = styled.input`
    font-size: 14px;
    font-weight: 600;
    padding: ${props => props.theme.spacing * 0.6}px ${props => props.theme.spacing}px;
    border: 1px solid ${props => props.theme.borderColor};

    &:focus {
        outline: 0;
        border: 1px solid ${props => props.theme.accentColor};
    }
`

type Props = {
    block: Omit<Block<any>, 'id'>
    parentId: string
    position: number
    onSave?: (block: Omit<Block<any>, 'id'>) => void
    onCancel?: () => void
}

const CreateBlock: FunctionComponent<Props> = ({ block, parentId, position, onSave }) => {
    const dispatch = useBuilderDispatch()
    const save = useCallback(
        (newBlock: Omit<Block<any>, 'id'>) => {
            dispatch({
                type: 'addBlock',
                parentId,
                position,
                block: newBlock
            })
            onSave !== undefined && onSave(newBlock)
        },
        [dispatch, parentId, position, onSave]
    )

    return (
        <Container>
            <BlockAdminForm block={block} save={save} cancel={() => {}}>
                <Header>
                    <BlockIcon type={block.type} size={20} />
                    <Field
                        name="label"
                        render={({ field, form }: FieldProps<{ label: string }>) => (
                            <div>
                                <LabelInput type="text" {...field} />
                                {form.touched.label && form.errors.label && form.errors.label}
                            </div>
                        )}
                    />
                </Header>
            </BlockAdminForm>
        </Container>
    )
}

export default CreateBlock
