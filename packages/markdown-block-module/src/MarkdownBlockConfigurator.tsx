import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { FormGrid, FieldLabel, TextArea } from '@compoz/ui'
import { MarkdownBlock, MarkdownBlockSettings } from './index'

const MarkdownBlockConfigurator: BlockConfigurator<MarkdownBlock> = ({ block }) => {
    return (
        <FormGrid style={{ gridTemplateColumns: '1fr 3fr' }}>
            <FieldLabel>content</FieldLabel>
            <Field
                name="settings.content"
                render={({ field, form }: FieldProps<MarkdownBlockSettings>) => (
                    <div>
                        <TextArea {...field} />
                        {form.touched.content && form.errors.content && form.errors.content}
                    </div>
                )}
            />
            <FieldLabel>enable templating</FieldLabel>
            <Field
                name="settings.enableTemplating"
                render={({ field, form }: FieldProps<MarkdownBlockSettings>) => (
                    <div>
                        <input type="checkbox" {...field} />
                        {form.touched.enableTemplating && form.errors.enableTemplating && form.errors.enableTemplating}
                    </div>
                )}
            />
        </FormGrid>
    )
}

export default MarkdownBlockConfigurator
