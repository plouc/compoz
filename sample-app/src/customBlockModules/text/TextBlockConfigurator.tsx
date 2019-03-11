import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { FormGrid, FieldLabel, TextArea } from '@compoz/ui'
import { TextBlock, TextBlockSettings } from './index'

const TextBlockConfigurator: BlockConfigurator<TextBlock> = ({ block }) => {
    return (
        <FormGrid style={{ gridTemplateColumns: '1fr 3fr' }}>
            <FieldLabel>text</FieldLabel>
            <Field
                name="settings.text"
                render={({ field, form }: FieldProps<TextBlockSettings>) => (
                    <div>
                        <TextArea {...field} />
                        {form.touched.text && form.errors.text && form.errors.text}
                    </div>
                )}
            />
            <FieldLabel>enable templating</FieldLabel>
            <Field
                name="settings.enableTemplating"
                render={({ field, form }: FieldProps<TextBlockSettings>) => (
                    <div>
                        <input type="checkbox" {...field} />
                        {form.touched.enableTemplating && form.errors.enableTemplating && form.errors.enableTemplating}
                    </div>
                )}
            />
        </FormGrid>
    )
}

export default TextBlockConfigurator
