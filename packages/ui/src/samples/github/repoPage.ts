const page = {
    id: '1ae27793-246e-4fe0-9a7e-0575ca4cf92b',
    label: 'GitHub/npm Repo Page'
}

const blocks = [
    {
        id: 'dad25073-908d-4d6e-8914-b3a4afdfc6a6',
        type: 'container',
        path: '0',
        label: 'Root',
        tags: [],
        children: [
            'c629bca7-cb87-420d-8667-d25cd515a166',
            '28486816-68c3-4b14-894c-1f761d0d0850',
            'ffc5bac2-1585-47d8-8899-71fc67765441',
            '0cf1f316-8d48-4ca8-817a-d17205507539'
        ],
        settings: {}
    },
    {
        id: 'c629bca7-cb87-420d-8667-d25cd515a166',
        type: 'apiCall',
        path: '0/1',
        label: 'GitHub Repo API Call',
        tags: [],
        children: [
            'e5362053-940e-4142-a3df-3e540027fc00'
        ],
        settings: {
            method: 'GET',
            url: 'https://api.github.com/repos/plouc/nivo',
            contextKey: 'repo'
        }
    },
    {
        id: 'e5362053-940e-4142-a3df-3e540027fc00',
        path: '0/1/0',
        label: 'GitHub Repo Intro',
        type: 'markdown',
        tags: [],
        children: [],
        settings: {
            enableTemplating: true,
            content: `
# ✨ \${repo.name}

[![Travis CI](https://img.shields.io/travis/plouc/nivo.svg?style=flat-square)](https://travis-ci.org/plouc/nivo)
[![nivo channel on discord](https://img.shields.io/badge/discord-nivo-61dafb.svg?style=flat-square)](https://discord.gg/n7Ft74f)

website: [**\${repo.homepage}**](\${repo.homepage}) 
| language: **\${repo.language}**

⭐**\${repo.stargazers_count}** 
| **\${repo.forks}** forks 
| 🐛 **\${repo.open_issues_count}**

\${repo.description}.
`
        },
    },
    {
        id: '28486816-68c3-4b14-894c-1f761d0d0850',
        type: 'apiCall',
        path: '0/2',
        label: 'npm @nivo/core',
        tags: [],
        children: [
            '9c4f54ae-da63-4695-aba8-a4a405a15a37'
        ],
        settings: {
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://registry.npmjs.com/@nivo/core',
            contextKey: 'core'
        }
    },
    {
        id: '9c4f54ae-da63-4695-aba8-a4a405a15a37',
        path: '0/2/0',
        label: '@nivo/core info',
        type: 'markdown',
        tags: [],
        children: [],
        settings: {
            enableTemplating: true,
            content: `
### \${core.name}

[![version](https://img.shields.io/npm/v/\${core.name}.svg?style=flat-square)](https://www.npmjs.com/package/\${core.name})

⚖️ **\${core.license}**
`
        },
    },
    {
        id: 'ffc5bac2-1585-47d8-8899-71fc67765441',
        type: 'apiCall',
        path: '0/3',
        label: 'npm @nivo/bar',
        tags: [],
        children: [
            '648dbe99-ea7f-44d2-9016-a3b22d2f970b'
        ],
        settings: {
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://registry.npmjs.com/@nivo/bar',
            contextKey: 'bar'
        }
    },
    {
        id: '648dbe99-ea7f-44d2-9016-a3b22d2f970b',
        path: '0/3/0',
        label: '@nivo/bar info',
        type: 'markdown',
        tags: [],
        children: [],
        settings: {
            enableTemplating: true,
            content: `
### \${bar.name}

[![version](https://img.shields.io/npm/v/\${bar.name}.svg?style=flat-square)](https://www.npmjs.com/package/\${bar.name})

⚖️ **\${bar.license}**

🏷️ **\${bar.keywords.join(', ')}**
`
        },
    },
    {
        id: '0cf1f316-8d48-4ca8-817a-d17205507539',
        type: 'apiCall',
        path: '0/4',
        label: 'npm @nivo/pie',
        tags: [],
        children: [
            '9dfed989-8f99-4ac0-9b3a-830b89857ecb'
        ],
        settings: {
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://registry.npmjs.com/@nivo/pie',
            contextKey: 'pie'
        }
    },
    {
        id: '9dfed989-8f99-4ac0-9b3a-830b89857ecb',
        path: '0/4/0',
        label: '@nivo/pie info',
        type: 'markdown',
        tags: [],
        children: [],
        settings: {
            enableTemplating: true,
            content: `
### \${pie.name}

[![version](https://img.shields.io/npm/v/\${pie.name}.svg?style=flat-square)](https://www.npmjs.com/package/\${pie.name})

⚖️ **\${pie.license}**

🏷️ **\${pie.keywords.join(', ')}**
`
        },
    }
]

export default { page, blocks }