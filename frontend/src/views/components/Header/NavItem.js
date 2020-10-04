import React from 'react';
import styled from 'styled-components';
import cn from 'classnames'

function NavItem (props) {

    const {
        name,
        to,
        isActive,
        subRoutes
    } = props;

    return (
        <Container className={cn('NavItem', {isActive})}>
            <Name>{name}</Name>
        </Container>
    )
}

const Container = styled.div`
  
`
const Name = styled.div`
    color: rgba(255,255,255,.6);
    font-size: 14px;
    .isActive & {
      
    }
`;
export default NavItem;