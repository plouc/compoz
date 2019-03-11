const page = {
    id: 'aeb59a35-84c4-4c8d-b2e2-8e12ab75705a',
    label: 'GitHub Profile Page'
}

const blocks = [
    {
        id: 'dad25073-908d-4d6e-8914-b3a4afdfc6a6',
        type: 'container',
        path: '0',
        label: 'Root',
        tags: [],
        children: [
            'fc2e7e8a-182f-438d-9da0-926ec1c814f7',
            'c629bca7-cb87-420d-8667-d25cd515a166',
        ],
        settings: {}
    },
    {
        id: 'fc2e7e8a-182f-438d-9da0-926ec1c814f7',
        type: 'markdown',
        path: '0/0',
        label: 'Introduction',
        tags: [],
        children: [],
        settings: {
            enableTemplating: false,
            content: `
This page shows how you can use the \`@compoz/api-call-block-module\` to build dynamic pages.
When rendered, it will **fetch** a GitHub profile using its rest API and **inject** the result in the
current **context**.

Please note that the text blocks nested inside the \`apiCall\` block have the \`useTemplating\` settings
set to \`true\` which is required to be able to interpolate their content.
`
        }
    },
    {
        id: 'c629bca7-cb87-420d-8667-d25cd515a166',
        type: 'apiCall',
        path: '0/1',
        label: 'GitHub User API Call',
        tags: [],
        children: [
            'e5362053-940e-4142-a3df-3e540027fc00'
        ],
        settings: {
            method: 'GET',
            url: 'https://api.github.com/users/plouc',
            contextKey: 'user'
        }
    },
    {
        id: 'e5362053-940e-4142-a3df-3e540027fc00',
        path: '0/1/0',
        label: 'GitHub User Intro',
        type: 'markdown',
        tags: [],
        children: [],
        settings: {
            enableTemplating: true,
            content: `
## \${user.name} - @\${user.login}

![\${user.name}](\${user.avatar_url})

@\${user.login} has  **\${user.followers}** followers
and follows **\${user.following}** users.
He lives in \${user.location} and works at \${user.company}.

You can have a look at his repositories [here](\${user.html_url}?tab=repositories).
`
        },
    }
]

export default { page, blocks }