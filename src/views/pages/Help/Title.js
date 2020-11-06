import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Title (props) {

    const {
        title,
        description
    } = props;

    return (
        <Container>
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: ${pxToRem(80)};
    h3 {
        font-size: ${pxToRem(42)};
        font-weight: 900;
        margin-bottom: ${pxToRem(25)};
    }
    p {
        font-size: ${pxToRem(20)};
        font-weight: 300;
        line-height: 1.2;
    }
`
export default Title;