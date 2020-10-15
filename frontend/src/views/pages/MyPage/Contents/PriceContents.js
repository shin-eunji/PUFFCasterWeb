import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Color} from "../../../../common/Color/Color.Styled";
import {Images} from "../../../../common/Images";

function PriceContents (props) {

    const {} = props;

    return (
        <Container>
            <Item>
                <Title>보유 플랜</Title>
                <PlanContent>
                    <Box sort={'standard'}></Box>
                    <Text>PUFF CASTER PRO</Text>
                    <Info/>
                </PlanContent>
            </Item>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`
const Item = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: ${pxToRem(440)};
    height: ${pxToRem(122)};
    border-bottom: 1px solid #eee;   
`;
const Title = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: bold;
    color: #222;
`;
const PlanContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: ${pxToRem(280)};
    height: ${pxToRem(40)};
    border-radius: ${pxToRem(6)};
    border: 1px solid #e5e5e5;
    padding: ${pxToRem(12)} ${pxToRem(18)};
`;
const Box = styled.div`
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
    ${props => props.sort === 'standard' &&`
        background: ${Color.TOPAZ};  
    `}
    ${props => props.sort === 'professional' &&`
        background: ${Color.TOPAZ};
    `}
    ${props => props.sort === 'enterprise' &&`
        background: ${Color.TOPAZ};
    `}
`;
const Text = styled.div`
    flex: 1;
    color: #666;
    font-size: ${pxToRem(14)};
    font-weight: 500;
`;
const Info = styled.div`
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    background: url(${Images.info});
`;
export default PriceContents;