import React from 'react';
import styled from 'styled-components';
import Title from "./Contents/Title";
import PriceContents from "./Contents/PriceContents";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Price (props) {

    const {} = props;

    return (
        <Container>
            <Title title={'결제'}
                   description={'보유한 프리미엄 상품을 확인 할 수 있습니다.'}
            />
            <PriceContents/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: ${pxToRem(100)};
`
export default Price;