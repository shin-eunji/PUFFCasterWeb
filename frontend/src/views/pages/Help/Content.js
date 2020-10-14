import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

function Content (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {   
                data.map((data, index) => <Item key={index} {...data}/>)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Content;