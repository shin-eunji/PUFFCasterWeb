import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import {withRouter} from "react-router-dom";

import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

import Nav from "./Nav";
import Member from "./Member";
import {useSelector} from "react-redux";


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
                    <Member onLoad={onLoad} user={user}/>
                </Gnb>

            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
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
`;
const Gnb = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: ${pxToRem(80)};
    color: ${Color.WHITE};
      
`;

export default withRouter(Header);