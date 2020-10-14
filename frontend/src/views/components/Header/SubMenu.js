import React from 'react';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {navigate} from "../../../lib/History";

import {Images} from "../../../common/Images";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function SubMenu(props) {

    const {
        name,
        location,
        routes,
        onClose,
    } = props;

    const subMenuRef = useRef(null)

    useEffect(() => {
        document.addEventListener('click', function (e) {
            if (subMenuRef.current) {
                const isSubMenu = subMenuRef.current.contains(e.target)
                if (!isSubMenu) {
                    onClose()
                }
            }
        })
    }, [])

    if (!routes || _.isEmpty(routes)) {
        return null
    }

    return (
        <Container ref={subMenuRef}>
            <Name onClick={onClose}>{name}<img src={Images.gnb_dropdown} alt="dropdown"/></Name>
            {
                routes.map((route, index) => <Item key={index}
                                                   isActive={location.pathname === route.to}
                                                   onClick={() => {
                                                       navigate(route.to)
                                                       if (location.pathname !== route.to) {
                                                           onClose()
                                                       }
                                                   }}
                >{route.name}</Item>)
            }
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: ${pxToRem(-13)};
    left: ${pxToRem(-16)};
    z-index: 10;
    width: ${pxToRem(147)};
    height: ${pxToRem(132)};
    background: ${Color.LIGHT_DARK};
    border-radius: ${pxToRem(6)};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`
const Name = styled.div`
    display:flex;
    align-items:center;
    font-size: ${pxToRem(14)};
    margin-bottom: ${pxToRem(5)};
    color: #fff;
    cursor: pointer;
    padding: ${pxToRem(13)} ${pxToRem(16)} 0;
    img {
      margin-left: ${pxToRem(10)};
      .isActive & {
          transform: rotate(180deg);
      }
    } 
`;
const Item = styled.div`
    display:flex;
    align-items:center;
    height: ${pxToRem(30)};
    color: #ccc;
    font-size: ${pxToRem(14)};
    font-weight: 300;
    text-transform: uppercase;
    padding-left: ${pxToRem(16)};
    .isActive & {
        color: #01bdfd;
        background: rgba(0,0,0,.1);
    }
`;
export default SubMenu;