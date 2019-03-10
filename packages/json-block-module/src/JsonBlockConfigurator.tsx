import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { FormGrid, FieldLabel, TextField, TextArea } from '@compoz/ui'
import { JsonBlock } from './index'
import JsonTextArea from './JsonTextArea'

const JsonBlockConfigurator: BlockConfigurator<JsonBlock> = ({ block }) => {
    return (
        <FormGrid
            style={{
                gridTemplateColumns: '1fr 3fr',
                maxWidth: '600px'
            }}
        >
            <Field
                name="settings.contextKey"
                render={({ field, form }: FieldProps<{ contextKey: string }>) => (
                    <>
                        <FieldLabel>contextKey</FieldLabel>
                        <TextField type="input" {...field}/>
                        {form.touched.contextKey && form.errors.contextKey && form.errors.contextKey}
                    </>
                )}
            />
            <Field
                name="settings.data"
                render={({ field, form }: FieldProps<{ data: string }>) => (
                    <>
                        <FieldLabel>data</FieldLabel>
                        <JsonTextArea
                            {...field}
                            setValue={(value: string) => form.setFieldValue('settings.data', value)}
                        />
                        {form.touched.data && form.errors.data && form.errors.data}
                    </>
                )}
            />
        </FormGrid>
    )
}

export default JsonBlockConfigurator
