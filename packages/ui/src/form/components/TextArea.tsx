import styled from '../../theming'

const TextArea = styled.textarea`
    width: 100%;
    max-width: 600px;
    min-height: 90px;
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
export default TextArea
