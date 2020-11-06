import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Color} from "../../../../common/Color/Color.Styled";

function Title(props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((item, index) =>
                    <Text key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </Text>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: ${pxToRem(50)};
    text-align:center;
    white-space: pre-wrap;
`
const Text = styled.div`
    color: ${Color.WHITE};
    h2 {
        font-size: ${pxToRem(36)};
        font-weight: bold;
        margin-bottom: ${pxToRem(10)};
    }
    p {
        font-size: ${pxToRem(20)};
        font-weight: 300;
    }
`;
export default Title;