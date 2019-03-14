import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { FormGrid, FieldLabel, TextField } from '@compoz/ui'
import { IteratorBlock, IteratorBlockSettings } from './index'

const IteratorBlockConfigurator: BlockConfigurator<IteratorBlock> = ({ block }) => {
    return (
        <FormGrid
            style={{
                gridTemplateColumns: '1fr 3fr',
                maxWidth: '600px'
            }}
        >
            <Field
                name="settings.contextKey"
                render={({ field, form }: FieldProps<IteratorBlockSettings>) => (
                    <>
                        <FieldLabel>contextKey</FieldLabel>
                        <TextField type="text" {...field} />
                        {form.touched.contextKey && form.errors.contextKey && form.errors.contextKey}
                    </>
                )}
            />
        </FormGrid>
    )
}

export default IteratorBlockConfigurator
