import React from 'react';
import styled from 'styled-components';
import Card from "./Card";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

function PlanCard (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((data, index) => <Card key={index} {...data} />)
            }
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.WHITE};
    width: ${pxToRem(360)};
    height: ${pxToRem(580)};
    border-radius: ${pxToRem(10)};
    border: 2px solid #eee;
    margin-top: ${pxToRem(50)};
`
export default PlanCard;