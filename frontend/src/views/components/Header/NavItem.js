import React from 'react';
import styled from 'styled-components';

function NavItem (props) {

    const {
        name
    } = props;

    return (
        <Container>
            {name}
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
`
export default NavItem;