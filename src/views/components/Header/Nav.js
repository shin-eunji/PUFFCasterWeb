import React from 'react';
import styled from 'styled-components';
import {NavRoutes} from "../Data/Routes";

import NavItem from "./NavItem";
import {customMedia} from "../../../common/Layout/Components.Styled";

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
    justify-content:center;
    ${customMedia.lessThan('mobile')`
        display: none;      
    `}
`
export default Nav;