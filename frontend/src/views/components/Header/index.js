import React from 'react';
import styled from 'styled-components';

import {ContentContainer} from "../Layout/Components.Styled";
import {withRouter} from "react-router-dom";
import Nav from "./Nav";

function Header (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Logo>puff</Logo>
                <Gnb>
                    <Nav/>
                </Gnb>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
    background: #f4f4f4;
`;
const Logo = styled.h1`
    
`;
const Gnb = styled.div`
    
`;

export default withRouter(Header);