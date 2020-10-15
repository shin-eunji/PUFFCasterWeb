import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Title(props) {

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
    
    h3 {
        color: #000;
        font-size: ${pxToRem(24)};
        font-weight: 900;
        margin-bottom: ${pxToRem(12)};
    }
    p {
        color: #222;
        font-size: ${pxToRem(16)};
        font-weight: 400;
    }     
`;

export default Title;