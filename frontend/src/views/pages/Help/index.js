import React from 'react';
import styled from 'styled-components';
import Title from "./Title";

function Help (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((data, index) => <Title key={index} {...data}/>)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Help;