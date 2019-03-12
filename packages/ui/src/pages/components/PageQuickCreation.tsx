import React, { FunctionComponent, useState, useRef } from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { PlusCircle } from 'react-feather'
import { useDispatchBinding } from '../../core'
import styled from '../../theming'
import { createPage } from '../store'

type Props = {}

const PageQuickCreation: FunctionComponent<Props> = () => {
    const [isCreating, setIsCreating] = useState(false)
    const inputEl = useRef<HTMLInputElement>(null)
    const create = useDispatchBinding(createPage)

    return (
        <Container>
            {!isCreating && (
                <Button onClick={() => {
                    setIsCreating(true)
                    if (inputEl !== null && inputEl.current !== null) {
                        inputEl.current.focus()
                    }
                }}>
                    <PlusCircle size={16}/>&nbsp;&nbsp;add
                </Button>
            )}
            <Formik
                onSubmit={(page, actions) => {
                    create(page)
                    setIsCreating(false)
                    actions.resetForm()
                }}
                initialValues={{
                    label: ''
                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field
                        name="label"
                        render={({ field, form }: FieldProps<{ label: string }>) => (
                            <div>
                                <TextField
                                    {...field}
                                    type="text"
                                    placeholder="label"
                                    ref={inputEl}
                                    isVisible={isCreating}
                                    onKeyUp={e => {
                                        if (e.key === 'Escape') {
                                            setIsCreating(false)
                                            if (inputEl !== null && inputEl.current !== null) {
                                                inputEl.current.blur()
                                                form.resetForm()
                                            }
                                        }
                                    }}
                                />
                                {form.touched.label && form.errors.label && form.errors.label}
                            </div>
                        )}
                    />
                </Form>
            </Formik>
        </Container>
    )
}

export default PageQuickCreation

const Container = styled.div`
    position: relative;
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 38px;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    border-bottom: 1px dashed ${props => props.theme.borderColor};
`

const TextField = styled.input<{ isVisible: boolean }>`
    position: ${props => props.isVisible ? 'relative' : 'absolute'};
    left: ${props => props.isVisible ? '0' : '-1000px'};
    width: 100%;
    height: 38px;
    font-size: 14px;
    border: 0 solid ${props => props.theme.borderColor};
    border-bottom-width: 1px;
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
    border-radius: 2px;

    &:focus,
    &:hover {
        outline: 0;
        background: #eee;
    }
`
