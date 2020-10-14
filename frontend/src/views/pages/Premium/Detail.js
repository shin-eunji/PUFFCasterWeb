import React from 'react';
import styled from 'styled-components';
import {priceDetails} from "../../components/Data/Premium";
import Item from "./Item";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Detail () {

    return (
        <Container>
            {
                priceDetails.map((item, index) => <Item key={index} {...item} />)
            }
        </Container>
    )
}

const Container = styled.div`
    margin-top: ${pxToRem(50)};
`
export default Detail;