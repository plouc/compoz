import { useMemo } from 'react'
import { template as templatize } from 'lodash'

export const useSettingTemplate = (
    isEnabled: boolean,
    value: string,
    context: any
) => {
    const template = useMemo(() => {
        if (!isEnabled) return () => value
        return templatize(value)
    }, [isEnabled, value])
    const computedValue = useMemo(() => template(context), [template, context])

    return computedValue
}