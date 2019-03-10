const page = {
    id: '94c1f7b8-d924-4d78-831f-03bf9a7d40a3',
    label: 'Home'
}

const blocks = [
    {
        id: '170d01ba-0f71-4d80-b458-1d7505773680',
        type: 'container',
        path: '0',
        label: 'Root',
        tags: [],
        children: [
            '4f85fbb6-8471-4773-a05d-b87e5b8750e2',
            'b49cd88f-86b8-4fe3-9a83-c458b4a4465f',
            'be6ea89c-681d-4bd5-ad61-0c843b04e668',
            '2efafa73-211a-4d52-ba23-a15fa29bd42d'
        ],
        settings: {}
    },
    {
        id: '4f85fbb6-8471-4773-a05d-b87e5b8750e2',
        type: 'container',
        path: '0/0',
        label: 'Header',
        tags: [],
        children: [
            '28a3834c-9542-4f8e-bb9f-07af78c379fd',
            'ba649d27-6ba6-4912-8b88-10bf09059e42',
            '4dbfde7d-eb26-417e-b70a-7970e863e696'
        ],
        settings: {}
    },
    {
        id: '28a3834c-9542-4f8e-bb9f-07af78c379fd',
        type: 'markdown',
        path: '0/0/0',
        label: 'Header Title',
        tags: [],
        children: [],
        settings: {
            content: `## Header`
        }
    },
    {
        id: 'ba649d27-6ba6-4912-8b88-10bf09059e42',
        type: 'json',
        path: '0/0/1',
        label: 'Things Pie Chart Data',
        tags: [],
        children: [
            '1d934ba2-479c-4e0d-95f3-627e6cbd2037'
        ],
        settings: {
            contextKey: 'thingsPieData',
            data: [
                { id: 'thingA', label: 'Thing A', value: 9 },
                { id: 'thingB', label: 'Thing B', value: 12 },
                { id: 'thingC', label: 'Thing C', value: 5 },
            ]
        }
    },
    {
        id: '1d934ba2-479c-4e0d-95f3-627e6cbd2037',
        type: 'pieChart',
        path: '0/0/1/0',
        label: 'Things Pie Chart',
        tags: [],
        children: [],
        settings: {
            dataContextKey: 'thingsPieData'
        }
    },
    {
        id: '4dbfde7d-eb26-417e-b70a-7970e863e696',
        type: 'markdown',
        path: '0/0/2',
        label: 'Introduction',
        tags: [],
        children: [],
        settings: {
            content: `### Introduction
    
Lorem ipsum **dolor sit amet**, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

> Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`
        }
    },
    {
        id: 'b49cd88f-86b8-4fe3-9a83-c458b4a4465f',
        type: 'container',
        path: '0/1',
        label: 'Sidebar',
        tags: [],
        children: [
            'db05510f-dc7e-49ee-b6dc-73dfb3c39312',
            '17cbca48-7715-4423-a6b6-14762f6e181e'
        ],
        settings: {}
    },
    {
        id: 'db05510f-dc7e-49ee-b6dc-73dfb3c39312',
        type: 'markdown',
        path: '0/1/0',
        label: 'Sidebar Title',
        tags: [],
        children: [],
        settings: {
            content: `## Sidebar`
        }
    },
    {
        id: '17cbca48-7715-4423-a6b6-14762f6e181e',
        type: 'markdown',
        path: '0/1/1',
        label: 'Address',
        tags: [],
        children: [],
        settings: {
            content: `#### Address

927 Pennington Court

Charlottesville, VA 22901
            `
        }
    },
    {
        id: 'be6ea89c-681d-4bd5-ad61-0c843b04e668',
        type: 'container',
        path: '0/2',
        label: 'Content',
        tags: [],
        children: [
            '5d4f7eb3-93de-4d03-bb2d-577ea54e926c',
            '7844ed9c-c372-43a9-8a29-1ec0ed0761d9',
            'a95835d7-ca54-49e5-99a4-9bda7ecb8ea4'
        ],
        settings: {}
    },
    {
        id: '5d4f7eb3-93de-4d03-bb2d-577ea54e926c',
        type: 'markdown',
        path: '0/2/0',
        label: 'Content Title',
        tags: [],
        children: [],
        settings: {
            content: `## Content`
        }
    },
    {
        id: '7844ed9c-c372-43a9-8a29-1ec0ed0761d9',
        type: 'json',
        path: '0/2/1',
        label: 'Things Bar Chart Data',
        tags: [],
        children: [
            '536680bf-7463-4cae-9006-de89f8895e90',
            '66f76335-63d4-45cd-b8fe-39a0b9bea853'
        ],
        settings: {
            contextKey: 'thingsBarData',
            data: [
                { id: 'thingA', groupA: 9, groupB: 7 },
                { id: 'thingB', groupA: 12, groupB: 3 },
                { id: 'thingC', groupA: 5, groupB: 23 },
            ]
        }
    },
    {
        id: '536680bf-7463-4cae-9006-de89f8895e90',
        type: 'barChart',
        path: '0/2/1/0',
        label: 'Things Bar Chart Group A',
        tags: [],
        children: [],
        settings: {
            dataContextKey: 'thingsBarData',
            dataKeys: 'groupA'
        }
    },
    {
        id: '66f76335-63d4-45cd-b8fe-39a0b9bea853',
        type: 'barChart',
        path: '0/2/1/1',
        label: 'Things Bar Chart Group B',
        tags: [],
        children: [],
        settings: {
            dataContextKey: 'thingsBarData',
            dataKeys: 'groupB'
        }
    },
    {
        id: 'a95835d7-ca54-49e5-99a4-9bda7ecb8ea4',
        type: 'markdown',
        path: '0/2/2',
        label: 'Content Description',
        tags: [],
        children: [],
        settings: {
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum sit amet tellus nec blandit. Donec non mauris porta, fringilla sapien in, molestie tellus. Etiam condimentum vestibulum ligula, sit amet finibus felis. Integer finibus nunc arcu, eu suscipit justo malesuada sit amet. Aliquam erat volutpat. In hac habitasse platea dictumst. Fusce tincidunt nulla ac ligula tincidunt, vitae aliquam ipsum dignissim. Donec odio urna, porttitor ut tincidunt ac, facilisis ut nunc. Donec eget est ligula. Integer ac laoreet est. Pellentesque ante nisi, facilisis vitae quam nec, aliquam fermentum diam. Cras eleifend nibh enim, sit amet hendrerit libero bibendum facilisis.

Proin bibendum, libero id scelerisque pharetra, diam magna sollicitudin lacus, id dignissim erat mauris vel leo. Nunc metus arcu, sagittis vel velit ut, laoreet consequat urna. Quisque imperdiet pulvinar sem, id suscipit ligula efficitur a. Donec mollis scelerisque ex, at vulputate enim gravida malesuada. Donec consequat iaculis consectetur. Duis justo enim, dignissim vel sodales at, dapibus ut dui. Donec tincidunt sed arcu in consequat. Sed vel maximus nisi. Fusce nec molestie justo. Aenean feugiat pellentesque purus a porta. Aenean tempus justo a dui feugiat, nec accumsan dolor condimentum. Vivamus semper augue porttitor risus venenatis auctor. Pellentesque iaculis porta posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nunc vel sagittis urna. Nullam congue viverra lacinia. Duis eget pellentesque leo. Nullam vitae purus id lacus porta rutrum in ac est. Mauris luctus interdum mauris, sed condimentum dui. Praesent sed ultrices orci. Integer dignissim arcu ullamcorper, congue ligula at, placerat nunc. Donec tincidunt massa vitae ligula suscipit dictum.

Vivamus fermentum mauris et nibh vestibulum volutpat. Nunc at porta neque. Vivamus convallis massa at enim tristique, vel scelerisque nisl gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet turpis vel tellus egestas porta. Morbi elit lorem, egestas id felis sed, placerat dignissim nunc. Donec facilisis erat ut eleifend fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ultricies lectus eget metus fermentum blandit. Morbi mattis bibendum sem. Vestibulum sollicitudin dui et leo fringilla, a pulvinar urna pharetra. Praesent luctus gravida lobortis. Aenean ligula felis, ultrices at tempus et, auctor non leo. Sed fringilla ante cursus fermentum tincidunt. Aliquam in tincidunt nunc, eu hendrerit nisi. Fusce in leo ut turpis accumsan accumsan.`
        }
    },
    {
        id: '2efafa73-211a-4d52-ba23-a15fa29bd42d',
        type: 'container',
        path: '0/3',
        label: 'Footer',
        tags: [],
        children: [
            '8f92301a-3785-4842-a3da-68bce6ed6e25',
            'e8bb0bb6-55a2-4768-8fab-e04f46e60faa'
        ],
        settings: {}
    },
    {
        id: '8f92301a-3785-4842-a3da-68bce6ed6e25',
        type: 'markdown',
        path: '0/3/0',
        label: 'Footer Title',
        tags: [],
        children: [],
        settings: {
            content: `## Footer`
        }
    },
    {
        id: 'e8bb0bb6-55a2-4768-8fab-e04f46e60faa',
        type: 'proxy',
        path: '0/3/1',
        label: 'Address Proxy',
        tags: [],
        children: [],
        settings: {
            id: '17cbca48-7715-4423-a6b6-14762f6e181e'
        }
    },
]

export default { page, blocks }