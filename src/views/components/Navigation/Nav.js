import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {navigate} from "../../../lib/History";

import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {SubRoutes} from "../Data/Routes";
import {customMedia} from "../../../common/Layout/Components.Styled";

function Nav(props) {

    const {
        sort
    } = props;


    return (
        <Container>
            {
                SubRoutes.map((route, index) =>
                    <NavItem key={index}
                             className={cn(route.sort, {isActive: sort === route.sort})}
                             onClick={() => navigate(route.to)}
                    >
                        <Icon className={cn(route.sort)}></Icon>
                        <Name>{route.nameKo}</Name>
                    </NavItem>)
            }
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${pxToRem(80)};
    background: ${Color.LIGHT_DARK};
    overflow: hidden;
`
const NavItem = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width: ${pxToRem(280)};
    height: 100%;
    z-index: 1;
    opacity: .4;
    cursor: pointer;
    &.isActive {
        opacity: 1;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: ${Color.DARK};
            transform: skew(-15deg);
            z-index: -1;
            
        }
    }
`
const Icon = styled.div`
    display:block;
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    margin-right: ${pxToRem(10)};
    &.caster {
        background: ${Color.TOPAZ};
    } 
    &.chat {
        background: ${Color.YELLOW};
    }
    &.cam {
        background: ${Color.PURPLE};
    }
`;
const Name = styled.div`
    color: ${Color.WHITE};
    font-size: ${pxToRem(15)};
`;
export default Nav;