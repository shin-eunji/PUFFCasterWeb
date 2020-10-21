export const NavRoutes = [
    {
        name: '제품',
        to: '/products/caster',
        isActive: true,
        subRoutes: [
            {
                name: 'puff caster',
                to: '/products/caster',
                isActive: false,
            },
            {
                name: 'puff chat',
                to: '/products/chat',
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

export const SubRoutes = [
    {
        sort: 'caster',
        name: 'puff caster',
        nameKo: '퍼프캐스트',
        to: '/products/caster',
    },
    {
        sort: 'chat',
        name: 'puff chat',
        nameKo: '퍼프 채팅창',
        to: '/products/chat',
    },
    {
        sort: 'cam',
        name: 'puff cam',
        nameKo: '퍼프 캠',
        to: '/products/cam',
    },
]

export const dots = ['caster', 'chat', 'cam']

export const info = [
    {
        name: '서비스이용약관',
        to: '/terms',
    },
    {
        name: '개인정보처리방침',
        to: '/policy',
    },
    {
        name: '도움말',
        to: '/faq',
    },
]