import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { TextArea } from '@compoz/ui'
import { JsonBlock } from './index'

const JsonBlockConfigurator: BlockConfigurator<JsonBlock> = ({ block }) => {
    return (
        <>
            <Field
                name="settings.data"
                render={({ field, form }: FieldProps<{ data: string }>) => (
                    <div>
                        <div>
                            <TextArea {...field} />
                            {form.touched.data && form.errors.data && form.errors.data}
                        </div>
                    </div>
                )}
            />
        </>
    )
}

export default JsonBlockConfigurator
