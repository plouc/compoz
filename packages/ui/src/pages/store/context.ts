import { PageState } from './state'
import { useBuilderState } from '../../core'

export const usePageState = <Prop extends keyof PageState>(property: Prop) => {
    const builderState = useBuilderState()
    const pageState = builderState.byPage[builderState.currentPageId]
    if (pageState === undefined) {
        throw new Error(`no current page`)
    }

    return pageState[property]
}
