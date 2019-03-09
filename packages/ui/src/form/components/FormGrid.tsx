import styled from '../../theming'

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${props => props.theme.spacing}px;
`

export default FormGrid
