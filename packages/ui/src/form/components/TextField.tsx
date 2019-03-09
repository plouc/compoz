import styled from '../../theming'

const TextField = styled.input`
    font-size: 13px;
    border: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacing}px;
    border-radius: 2px;

    &:focus,
    &:hover {
        outline: 0;
        border-color: ${props => props.theme.textColor};
    }
`
export default TextField
