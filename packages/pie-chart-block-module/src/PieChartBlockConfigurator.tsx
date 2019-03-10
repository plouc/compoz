import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { TextField } from '@compoz/ui'
import { PieChartBlock, PieChartBlockSettings } from './index'

const PieChartBlockConfigurator: BlockConfigurator<PieChartBlock> = ({ block }) => {
    return (
        <div>
            <Field
                name="settings.dataContextKey"
                render={({ field, form }: FieldProps<PieChartBlockSettings>) => (
                    <div>
                        <TextField type="input" {...field} />
                        {form.touched.dataContextKey && form.errors.dataContextKey && form.errors.dataContextKey}
                    </div>
                )}
            />
        </div>
    )
}

export default PieChartBlockConfigurator
