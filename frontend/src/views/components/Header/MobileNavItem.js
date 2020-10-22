import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {appActions} from "../../../redux/actionCreators";
import {navigate} from "../../../lib/History";

function MobileNavItem (props) {

    const {
        name,
        location,
        to,
    } = props;

    const NavClose = () => {
        navigate(to)
        appActions.updateState({openSidebar: false})
    }

    return (
        <Container>
            <ItemName onClick={NavClose}
                      isActive={location.pathname === to}
            >{name}</ItemName>
        </Container>
    )
}

const Container = styled.div`
`
const ItemName = styled.div`
    font-size: ${pxToRem(34)};
    font-weight: 900;
    margin-top: ${pxToRem(20)};
    cursor: pointer;
`;
export default MobileNavItem;