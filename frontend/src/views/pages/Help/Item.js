import React from 'react';
import styled from 'styled-components';

function Item(props) {

    const {
        content,
    } = props;

    return (
        <Container>
            {
                content.map((item, index) =>
                    <Text key={index}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </Text>
                )
            }
        </Container>
    )
}

const Container = styled.div`
`
const Text = styled.div`
    
`;
export default Item;