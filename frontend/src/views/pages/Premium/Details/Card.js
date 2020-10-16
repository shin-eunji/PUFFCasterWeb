import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Color} from "../../../../common/Color/Color.Styled";
import {PayButton} from "../../../../common/Button/Button.Styled";
import Detail from "./Detail";
import {navigate} from "../../../../lib/History";

function Card(props) {

    const {
        title,
        description,
        price,
        thumbnail,
        pay,
        sort,
    } = props;

    return (
        <Container>
            <Text>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>{price}</Price>
                <Thumbnail>{thumbnail}</Thumbnail>
                <Detail/>
            </Text>
            <Button sort={sort}
                    onClick={() => navigate('/premium/pay')}
            >{pay}</Button>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 100%;
    padding: ${pxToRem(40)};
    white-space: pre-wrap;
    
`
const Text = styled.div`
    flex: 1;
`;
const Title = styled.div`
    color: #222;
    font-size: ${pxToRem(24)};
    font-weight: bold;
    line-height: 1.4;
`;
const Description = styled.div`
    color: #888;
    font-size: ${pxToRem(14)};
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: ${pxToRem(26)};
`;
const Price = styled.div`
    font-size: ${pxToRem(45)};
    font-weight: 900;
`;
const Thumbnail = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: bold;
    color: ${Color.TOPAZ};
`;
const Button = styled(PayButton)`
    
`;
export default Card;