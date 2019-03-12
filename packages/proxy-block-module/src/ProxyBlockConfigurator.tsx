import React from 'react'
import { Field, FieldProps } from 'formik'
import { BlockConfigurator } from '@compoz/core'
import { usePageBlocks } from '@compoz/ui'
import { ProxyBlock } from './index'

const ProxyBlockConfigurator: BlockConfigurator<ProxyBlock> = ({ block }) => {
    const blocks = usePageBlocks()
    const allowedBlocks = blocks.filter(b => {
        return b.id !== block.id && b.path !== '0' && !['container', 'proxy'].includes(b.type)
    })

    return (
        <>
            {allowedBlocks.length === 0 && (
                <div>Sorry, but it looks like there's no available block to proxy.</div>
            )}
            {allowedBlocks.length > 0 && (
                <Field
                    name="settings.id"
                    render={({ field, form }: FieldProps<{ id: string }>) => (
                        <div>
                            <select {...field}>
                                {allowedBlocks.map(b => (
                                    <option key={b.id} value={b.id}>
                                        {b.label}
                                    </option>
                                ))}
                            </select>
                            {form.touched.id && form.errors.id && form.errors.id}
                        </div>
                    )}
                />
            )}
        </>
    )
}

export default ProxyBlockConfigurator
