import React from 'react';
import styled from 'styled-components';
import FeatureItem from "./FeatureItem";
import {pxToRem} from "../../../common/Text/Text.Styled";

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