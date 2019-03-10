import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { TextField } from '@compoz/ui'
import { BarChartBlock, BarChartBlockSettings } from './index'

const BarChartBlockConfigurator: BlockConfigurator<BarChartBlock> = ({ block }) => {
    return (
        <div>
            <Field
                name="settings.dataContextKey"
                render={({ field, form }: FieldProps<BarChartBlockSettings>) => (
                    <div>
                        <TextField type="input" {...field} />
                        {form.touched.dataContextKey && form.errors.dataContextKey && form.errors.dataContextKey}
                    </div>
                )}
            />
            <Field
                name="settings.dataKeys"
                render={({ field, form }: FieldProps<BarChartBlockSettings>) => (
                    <div>
                        <TextField type="input" {...field} />
                        {form.touched.dataKeys && form.errors.dataKeys && form.errors.dataKeys}
                    </div>
                )}
            />
        </div>
    )
}

export default BarChartBlockConfigurator
