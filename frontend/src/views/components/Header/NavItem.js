import React, {useState} from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import cn from 'classnames'

import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {Images} from "../../../common/Images";
import SubMenu from "./SubMenu";
import {customMedia} from "../../../common/Layout/Components.Styled";

function NavItem(props) {

    const {
        name,
        to,
        isActive,
        subRoutes,
        location,
    } = props;

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        if (subRoutes) {
            setMenu(true)
        } else {
            navigate(to)
        }
    }

    return (
        <Container className={cn('NavItem', {isActive})}>
            <ItemName onClick={handleMenu}
                      isActive={location.pathname === to}
            >
                {name}
                {
                    subRoutes &&
                    <img src={Images.gnb_dropdown} alt="dropdown"/>
                }
            </ItemName>
            {
                menu &&
                <SubMenu name={name}
                         location={location}
                         routes={subRoutes}
                         onClose={() => setMenu(false)}
                />
            }

        </Container>
    )
}

const Container = styled.div`
    position:relative;
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
    ${props => props.isActive && `
        opacity: 1;
    `}
    img {
        margin-left: ${pxToRem(10)};
    }
`;
export default NavItem;