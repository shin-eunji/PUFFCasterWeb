import React from 'react';
import styled from 'styled-components';
import {profileActions} from "../../../../redux/actionCreators";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Button, ButtonGroup} from "../../../../common/Button/Button.Styled";
import {Color} from "../../../../common/Color/Color.Styled";
import {navigate} from "../../../../lib/History";

function PlanPopup(props) {

    const {} = props;

    const closePlanPopup = () => {
        profileActions.updateState({popupPlan: false})
    }

    return (
        <Container onClick={closePlanPopup}>
            <PlanContainer>
                <Title>보유 플랜</Title>
                <Description>
                    <Icon/>
                    <Text>고객님께서 보유하신 플랜은<br/>PUFF CASTER Professional 입니다.</Text>
                    <Thumbnail>현재 1개월/정기구독의 형태로 사용하고 계십니다.</Thumbnail>
                    <PlanDetail onClick={() => navigate('/premium/detail')}>플랜 상세 보기</PlanDetail>
                </Description>
                <ButtonGroup>
                    <RefundButton sort={'line'}
                                  size={'small'}
                    >환불</RefundButton>
                </ButtonGroup>
            </PlanContainer>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(0,0,0,.4);
`
const PlanContainer = styled.div`
    width: ${pxToRem(480)};
    height: ${pxToRem(560)};
    background: #fff;
    padding: ${pxToRem(60)};
`;
const Title = styled.div`
    font-size: ${pxToRem(36)};
    font-weight: bold;
    margin-bottom: ${pxToRem(30)};
`;
const Description = styled.div`
    display:flex;
    flex-direction:column;
`;
const Icon = styled.div`
    width: 150px;
    height: 150px;
    background: ${Color.TOPAZ};
    margin-bottom: ${pxToRem(20)};
`;
const Text = styled.div`
    color: #222;
    font-size: ${pxToRem(20)};
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: ${pxToRem(10)};  
`;
const Thumbnail = styled.div`
    color: #444;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    margin-bottom: ${pxToRem(40)};
`;
const PlanDetail = styled.div`
      background: none;
      border: none;
      color: #222;
      font-size: ${pxToRem(16)};
      font-weight: 400;
      text-decoration: underline;
`;
const RefundButton = styled(Button)`
    width: ${pxToRem(150)};
    height: ${pxToRem(50)};
`;
export default PlanPopup;