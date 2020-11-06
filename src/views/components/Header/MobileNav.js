import React from 'react';
import styled from 'styled-components';

import {ContentContainer, customMedia} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Images} from "../../../common/Images";
import {useSelector} from "react-redux";
import {appActions} from "../../../redux/actionCreators";
import {NavRoutes} from "../Data/Routes";
import {Button} from "../../../common/Button/Button.Styled";
import MobileNavItem from "./MobileNavItem";
import {Color} from "../../../common/Color/Color.Styled";

function MobileNav(props) {

    const {
        location
    } = props;

    const {openSidebar} = useSelector(state => state.app)


    const MenuOpen = () => appActions.updateState({openSidebar: true})
    const MenuClose = () => appActions.updateState({openSidebar: false})


    return (
        <Container>
            <ButtonOpen onClick={MenuOpen}/>
            {
                openSidebar &&
                <Nav openSidebar={MenuOpen}>
                    <ButtonClose onClick={MenuClose}/>
                    <Item>
                        {
                            NavRoutes.map((route, index) => <MobileNavItem key={index} {...route} location={location}/>)
                        }
                    </Item>
                </Nav>
            }
        </Container>
    )
}

const Container = styled.div`
   z-index: 100;
`
const ButtonOpen = styled.div`
    ${customMedia.lessThan('mobile')`
        position:relative;
        width: ${pxToRem(40)};
        height: ${pxToRem(40)};
        background: url(${Images.mobile_menu});
        margin-left: ${pxToRem(20)};
        cursor: pointer;
        z-index: 99;
    `}
`;
const Nav = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${pxToRem(483)};
    background: ${Color.DARK};
    z-index: 100;
    cursor: inherit;
`;
const ButtonClose = styled.button`
    position: absolute;
    top: ${pxToRem(20)};
    right: ${pxToRem(15)};
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    background: url(${Images.mobile_menu_close});
    border: none;
    z-index: 1000;
    cursor: pointer;
    margin-left: ${pxToRem(20)};
`;
const Item = styled(ContentContainer)`
    position: absolute;
    top: ${pxToRem(80)};
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: 100%;
    height: 100%;
`;
export default MobileNav;