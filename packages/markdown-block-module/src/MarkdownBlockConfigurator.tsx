import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { TextArea } from '@compoz/ui'
import { MarkdownBlock, MarkdownBlockSettings } from './index'

const MarkdownBlockConfigurator: BlockConfigurator<MarkdownBlock> = ({ block }) => {
    return (
        <div>
            <Field
                name="settings.content"
                render={({ field, form }: FieldProps<MarkdownBlockSettings>) => (
                    <div>
                        <TextArea {...field} />
                        {form.touched.content && form.errors.content && form.errors.content}
                    </div>
                )}
            />
        </div>
    )
}

export default MarkdownBlockConfigurator
