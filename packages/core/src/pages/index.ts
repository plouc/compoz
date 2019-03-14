export interface Page {
    /**
     * Page's unique identifier, should be generated
     * by the Storage.
     */
    id: string
    /**
     * Page display name.
     */
    label: string
    /**
     * Page root block identifier.
     */
    rootBlockId: string
}
