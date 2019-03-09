import React, { FunctionComponent } from 'react'
import { Formik, Form } from 'formik'
import { Omit, Block } from '@compoz/core'
import styled, { unselectable } from '../../theming'
import { useModuleConfigurator } from '../../modulesRegistry'

const Container = styled.div`
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 2}px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const Actions = styled.div`
    display: grid;
    grid-template-columns: 120px 120px;
    grid-column-gap: ${props => props.theme.spacing * 2}px;
    margin-top: ${props => props.theme.spacing * 2}px;
`

const Button = styled.button`
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    border: 1px solid ${props => props.theme.borderColor};
    font-weight: 600;
    border-radius: 0;
    font-size: 12px;
    color: inherit;
    cursor: pointer;
    text-align: center;
    ${unselectable}

    &:hover {
        border-color: ${props => props.theme.textColor};
    }
`

type Props = {
    block: Omit<Block<any>, 'id'> & { id?: string }
    save: (block: Omit<Block<any>, 'id'> & { id?: string }) => void
    cancel: () => void
}

const BlockAdminForm: FunctionComponent<Props> = ({ block, children, save, cancel }) => {
    const Configurator = useModuleConfigurator(block.type)

    return (
        <Formik enableReinitialize={true} initialValues={block} onSubmit={data => save(data)}>
            <Form>
                {children}
                <Container>
                    <Configurator block={block} mode="edit" />
                    <Actions>
                        <Button type="submit">save block</Button>
                        <Button as="span" onClick={cancel}>
                            cancel
                        </Button>
                    </Actions>
                </Container>
            </Form>
        </Formik>
    )
}

export default BlockAdminForm
