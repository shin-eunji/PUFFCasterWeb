import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

function Service(props) {

    const {
        data,
    } = props;

    return (
        <Container>
                {
                    data.map((item, index) => <Item key={index} {...item} />)
                }
        </Container>
    )
}

const Container = styled.div`

`
export default Service;