import { useMemo } from 'react'

export const augmentParentContext = (parentContext: any, key: string, data: any): any => {
    return useMemo(() => {
        if (parentContext[key] !== undefined) {
            throw new Error(`found duplicated key in block context: ${key}`)
        }

        return {
            ...parentContext,
            [key]: data
        }
    }, [parentContext, key, data])
}