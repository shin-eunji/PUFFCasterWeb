export const routes = [
    {
        name: '제품',
        to: '/products',
        isActive: true,
        subRoutes: [
            {
                name: 'puff caster',
                to: '/products/caster',
                isActive: false,
            },
            {
                name: 'puff chat',
                to: '/products/play',
                isActive: false,
            },
            {
                name: 'puff cam',
                to: '/products/cam',
                isActive: false,
            },
        ]
    },
    {
        name: '프리미엄',
        to: '/premium',
        isActive: false,
    },
    {
        name: '더 알아보기',
        to: '/more',
        isActive: false,
    }
]