import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import Member from "./Member";
import {withRouter} from "react-router-dom";

function Header (props) {

    const {
        location
    } = props;

    return (
        <Container>
            <Logo>puff</Logo>
            <Gnb>
                <Nav ></Nav>
                <Member/>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
`
const Logo = styled.div`
    
`;
const Gnb = styled.div`
    
`;
export default withRouter(Header);