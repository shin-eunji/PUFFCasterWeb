import React from 'react';
import styled from 'styled-components';
import {routes} from "../Data/Routes";
import NavItem from "./NavItem";

function Nav (props) {

    const {
        location
    } = props;

    return (
        <Container>
            {
                routes.map((route, index) => <NavItem key={index} {...route} location={location} />)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Nav;