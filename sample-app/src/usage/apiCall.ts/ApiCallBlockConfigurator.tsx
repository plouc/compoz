import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { FormGrid, FieldLabel, TextField } from '@compoz/ui'
import { ApiCallBlock, ApiCallBlockSettings } from './index'

const ApiCallBlockConfigurator: BlockConfigurator<ApiCallBlock> = ({ block }) => {
    return (
        <FormGrid
            style={{
                gridTemplateColumns: '1fr 3fr',
                maxWidth: '600px'
            }}
        >
            <Field
                name="settings.method"
                render={({ field, form }: FieldProps<ApiCallBlockSettings>) => (
                    <>
                        <FieldLabel>method</FieldLabel>
                        <TextField type="text" {...field} />
                        {form.touched.method && form.errors.method && form.errors.method}
                    </>
                )}
            />
            <Field
                name="settings.url"
                render={({ field, form }: FieldProps<ApiCallBlockSettings>) => (
                    <>
                        <FieldLabel>url</FieldLabel>
                        <TextField type="text" {...field} />
                        {form.touched.url && form.errors.url && form.errors.url}
                    </>
                )}
            />
        </FormGrid>
    )
}

export default ApiCallBlockConfigurator
