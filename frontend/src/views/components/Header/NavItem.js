import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import cn from 'classnames'

import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {Images} from "../../../common/Images";

function NavItem(props) {

    const {
        name,
        to,
        isActive,
        subRoutes
    } = props;

    return (
        <Container className={cn('NavItem', {isActive})}>
            <ItemName onClick={() => navigate(to)}>
                {name}
                {
                    subRoutes &&
                    <img src={Images.gnb_dropdown} alt="dropdown"/>
                }
            </ItemName>

        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
    margin-left: 50px;
`
const ItemName = styled.div`
    display:flex;
    align-items:center;
    color: ${Color.WHITE};
    font-size: ${pxToRem(14)};
    font-weight: 400;
    opacity: .6;
    .isActive & {
        opacity: 1;
    }
    img {
        margin-left: ${pxToRem(10)};
    }
`;
export default NavItem;