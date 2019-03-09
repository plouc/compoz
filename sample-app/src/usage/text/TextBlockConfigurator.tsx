import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { TextArea } from '@compoz/ui'
import { TextBlock, TextBlockSettings } from './index'

const TextBlockConfigurator: BlockConfigurator<TextBlock> = ({ block }) => {
    return (
        <div>
            <Field
                name="settings.text"
                render={({ field, form }: FieldProps<TextBlockSettings>) => (
                    <div>
                        <TextArea {...field} />
                        {form.touched.text && form.errors.text && form.errors.text}
                    </div>
                )}
            />
        </div>
    )
}

export default TextBlockConfigurator
