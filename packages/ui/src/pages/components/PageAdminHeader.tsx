import React, { FunctionComponent } from 'react'
import styled from '../../theming'
import { usePage } from '../store'

const Container = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacing}px ${props => props.theme.spacing * 2}px;
`

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 18px;
`

type Props = {}

const PageAdminHeader: FunctionComponent<Props> = () => {
    const page = usePage()

    return (
        <Container>
            {page !== null && <Title>{page.label}</Title>}
        </Container>
    )
}

export default PageAdminHeader
