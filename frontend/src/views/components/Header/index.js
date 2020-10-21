import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import {withRouter} from "react-router-dom";

import {ContentContainer, customMedia} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

import Nav from "./Nav";
import Member from "./Member";
import {useSelector} from "react-redux";
import MobileNav from "./MobileNav";


function Header (props) {

    const {
        location
    } = props;

    const {user, onLoad} = useSelector(state => state.auth)

    return (
        <Container>
            <SContentContainer>
                <Logo onClick={() => navigate('/products/caster')}>puff</Logo>

                <Gnb>
                    <Nav location={location}/>
                    <MobileNav location={location}/>
                    <Member onLoad={onLoad} user={user}/>
                </Gnb>

            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    height: ${pxToRem(80)};
    background: ${Color.DARK};
    z-index: 100;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    color: ${Color.WHITE};
    font-size: ${pxToRem(24)};
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 1000;
`;
const Gnb = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: ${pxToRem(80)};
    color: ${Color.WHITE};
    ${customMedia.lessThan('mobile')`
        display:flex;
        flex-direction: row-reverse;
    `}
`;

export default withRouter(Header);