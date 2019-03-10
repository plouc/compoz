import React, { FormEvent, FunctionComponent, useState, useCallback, CSSProperties } from 'react'
import { TextArea } from '@compoz/ui'
import console = require('console');

type Props = {
    value: object,
    setValue: (value: string) => void
}

const JsonTextArea: FunctionComponent<Props> = ({ value, setValue, ...props }) => {
    const [rawValue, setRawValue] = useState(JSON.stringify(value, null, '    '))
    const [error, setError] = useState<null | string>(null)
    const onChange = useCallback(
        (e: FormEvent) => {
            const textarea = e.target as HTMLTextAreaElement
            const jsonString = textarea.value
            setRawValue(jsonString)
            console.log(jsonString)
            try {
                const json = JSON.parse(jsonString)
                setError(null)
                console.log(`setValue()`, json)
                setValue(json)
            } catch (err) {
                setError(err.message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t'))
            }
        },
        [setValue, setError]
    )

    const style: CSSProperties = {}
    if (error !== null) {
        style.borderColor = 'red'
    }

    return (
        <>
            <TextArea
                {...props}
                value={rawValue}
                onChange={onChange}
                style={style}
            />
            {error !== null && (
                <div>
                    {error}
                </div>
            )}
        </>
    )
}

export default JsonTextArea