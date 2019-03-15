import React, { FunctionComponent, useCallback } from 'react'
import YAML from 'js-yaml'
import { Storage } from '@compoz/core'
import { omit } from 'lodash'
import styled from '../../theming'
import { useStorage } from '../store'

const flattenBlock = (block: any, stack: any[] = []) => {
    const newBlock = {
        tags: [],
        settings: {},
        children: [],
        ...block
    }
    newBlock.childPositions = []
    stack.push(newBlock)
    newBlock.children.forEach((child: any) => {
        const position = stack.length
        flattenBlock({ ...child, position }, stack)
        newBlock.childPositions.push(position)
    })

    return stack
}

const run = async (storage: Storage, data: any) => {
    for (const page of data.pages) {
        const rootBlock = omit(page.block, 'children')
        const createdPage = await storage.createPage(omit(page, 'block'), rootBlock)
        const blocks = flattenBlock(page.block)
        const reversed = [...blocks].reverse()
        const idsMapping: { [k: number]: string } = {}
        for (const block of reversed) {
            block.children = []
            if (block.childPositions !== undefined) {
                block.children = block.childPositions.map((position: number) => idsMapping[position])
            }
            const createdBlock = await storage.createBlock(omit(block, 'position', 'childPositions'), {
                pageId: createdPage.id
            })
            idsMapping[block.position] = createdBlock.id
        }
    }
}

const Import: FunctionComponent = () => {
    const storage = useStorage()
    const handleChange = useCallback(
        (changeEvent) => {
            const files = changeEvent.target.files
            if (files.length === 1) {
                const file = files[0]
                const reader = new FileReader()
                reader.onload = (readerEvent) => {
                    const raw = (readerEvent.target as any).result
                    let parsed: any
                    if (file.name.match(/\.ya?ml$/)) {
                        parsed = YAML.load(raw)
                    } else {
                        parsed = JSON.parse(raw)
                    }
                    run(storage, parsed)
                }
                reader.readAsText(file)
            }
        },
        [storage]
    )

    return (
        <Container>
            <h1>Import</h1>
            <input
                type="file"
                accept=".json,.yml,.yaml"
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

