import React from 'react';
import styled from 'styled-components';
import NavItem from "./NavItem";

function Nav (props) {

    const {

    } = props;

    // const routes = getRoutes(location)
    //
    // function getRoutes() {
    //
    // }

    const routes = [
        {
            name: '제품',
            to: '/products',
            isActive: false,
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
                }
            ]
        },
        {
            name: '프리미엄',
            to: '/preminum',
            isActive: false,
        },
        {
            name: '더 알아보기',
            to: '/about',
            isActive: false,
        }
    ]

    return (
        <Container>
            {
                routes.map((route, i) => <NavItem key={i} {...route} />)
            }
        </Container>
    )
}

const Container = styled.nav`
`
export default Nav;