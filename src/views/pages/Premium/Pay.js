import React from 'react';
import styled from 'styled-components';
import {PageTitle} from "../../components/Data/Title";
import {LoginContainer} from "../../../common/Layout/Components.Styled";
import {Images} from "../../../common/Images";
import {navigate} from "../../../lib/History";
import {Button} from "../../../common/Button/Button.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import Title from "../../components/Login/Title";

function Pay (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <img src={Images.img_pricing} alt="pricing 이미"/>
                <Title data={PageTitle.successPay}/>
                
                <DetailContainer>
                    <TextProduct>
                        <PayTitle>구매 상품</PayTitle>
                        <Description>PUFF CASTER Professional(단품)</Description>
                    </TextProduct>
                    <Text>
                        <PayTitle>결제 금액</PayTitle>
                        <PayDescription>3,400원</PayDescription>
                    </Text>
                    <Text>
                        <PayTitle>결제 날짜</PayTitle>
                        <PayDescription>2020.05.20</PayDescription>
                    </Text>
                </DetailContainer>

                <HomeButton sort={'line'}
                            onClick={() => navigate('/')}
                >홈페이지로 돌아가기</HomeButton>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(LoginContainer)`
    img {
        margin-bottom: ${pxToRem(35)};
    }
`;
const DetailContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: ${pxToRem(280)};
    border-top: 2px solid #fff;
    margin-bottom: ${pxToRem(60)};
`;
const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: ${pxToRem(20)} 0;
    border-bottom: 1px solid #666;
`;
const TextProduct = styled.div`
    display:flex;
    flex-direction:column;
    padding: ${pxToRem(20)} 0;
    border-bottom: 1px solid #666;
`;
const PayTitle = styled.div`
    color: #fff;
    font-size: ${pxToRem(15)};
    font-weight: 500;
`;
const Description = styled.div`
    color: #fff;
    font-size: ${pxToRem(15)};
    font-weight: 300;
`;
const PayDescription = styled.div`
    color: #fff;
    font-size: ${pxToRem(15)};
    font-weight: 300;
`;
const HomeButton = styled(Button)`
    width: ${pxToRem(200)};
    height: ${pxToRem(50)};
`;
export default Pay;