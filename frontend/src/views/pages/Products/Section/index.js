import React from 'react';
import styled from 'styled-components';
import FeatureItem from "./FeatureItem";

function Features(props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((item, index) =>
                    <FeatureItem key={index}
                                 {...item}
                                 reverse={index % 2 === 1}
                    />)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Features;