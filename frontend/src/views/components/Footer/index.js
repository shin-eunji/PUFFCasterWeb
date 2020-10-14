import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import {info} from '../Data/Routes'
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {navigate} from "../../../lib/History";

function Footer(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Gnb>
                    <Logo>puff</Logo>
                    <Nav>
                        {
                            info.map((item, index) =>
                                <NavItem key={index}
                                         onClick={() => navigate(item.to)}
                                >{item.name}</NavItem>)
                        }
                    </Nav>
                </Gnb>
                <Copyright>Copyright ©Starship Vending-machine. All rights reserved</Copyright>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: #000;
    height: ${pxToRem(150)};
`
const SContentContainer = styled(ContentContainer)`
    position:relative;
    height: 100%;
    left: 0;
    bottom: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const Gnb = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
`;
const Logo = styled.div`
    color: #fff;
    font-size: ${pxToRem(14)};
    font-weight: 900;
    text-transform: uppercase;
    margin-right: ${pxToRem(30)};
`;
const Nav = styled.div`
    display:flex;
    align-items:center;
`;
const NavItem = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    color: #ccc;
    font-size: ${pxToRem(14)};
    font-weight: 300;
    margin: 0 ${pxToRem(10)};
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        top: ${pxToRem(3)};
        right: ${pxToRem(-10)};
        width: ${pxToRem(1)};
        height: ${pxToRem(16)};
        background: #222;
    }
    &:last-child::after {
        content: '';
        display: none;
    }
`;
const Copyright = styled.div`
    display:flex;
    justify-content:center;
    color: #555;
    font-size: ${pxToRem(14)};
    font-weight: 300;
`;

export default withRouter(Footer);