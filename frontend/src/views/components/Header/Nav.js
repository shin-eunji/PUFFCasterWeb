import React from 'react';
import styled from 'styled-components';
import {NavRoutes} from "../Data/Routes";

import NavItem from "./NavItem";

function Nav (props) {

    const {
        location
    } = props;

    return (
        <Container>
            {
                NavRoutes.map((route, index) => <NavItem key={index} {...route} location={location} />)
            }
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;  
    justify-content:center
`
export default Nav;