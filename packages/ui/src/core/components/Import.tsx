import React, { FunctionComponent, useRef, useCallback } from 'react'
import styled from '../../theming'

const Import: FunctionComponent = () => {
    const handleChange = useCallback(
        (changeEvent) => {
            const files = changeEvent.target.files
            if (files.length === 1) {
                console.log(changeEvent.target.files)
                const reader = new FileReader()
                reader.onload = (readerEvent) => {
                    console.log((readerEvent.target as any).result)
                }
                reader.readAsText(files[0])
            }
        },
        []
    )

    return (
        <Container>
            <h1>Import</h1>
            <input
                type="file"
                accept=".json"
                onChange={handleChange}
                multiple={false}
            />
        </Container>
    )
}

export default Import

const Container = styled.div`
    background: ${props => props.theme.backgroundColor};
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 2}px;
`

