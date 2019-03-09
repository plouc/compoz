import React, { FunctionComponent, memo } from 'react'
import { Props as IconProps } from 'react-feather'
import { useModule } from '../../modulesRegistry'

interface Props extends IconProps {
    type: string
}

const BlockIcon: FunctionComponent<Props> = memo(({ type, size, color }) => {
    const module = useModule(type)
    const Icon: any = module.icon

    return React.createElement(Icon, { size, color })
})

export default BlockIcon
