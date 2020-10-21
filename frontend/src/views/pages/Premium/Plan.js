import React from 'react';
import styled from 'styled-components';
import Title from "../../components/Login/Title";
import {PageTitle} from "../../components/Data/Title";
import PlanCard from "./Details/PlanCard";
import {premiumData} from "../../components/Data/Premium";
import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Images} from "../../../common/Images";
import {LoginContainer} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function Plan (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Title data={PageTitle.premium}/>
                <PlanContainer>
                    <PlanCard data={premiumData.standard}/>
                    <PlanCard data={premiumData.professional}/>
                    <PlanCard data={premiumData.enterprise}/>
                </PlanContainer>
                <PlanDetail onClick={() => navigate('/premium/detail')}>플랜 상세 보기</PlanDetail>
            </SContentContainer>
        </Container>
    )
}


const Container = styled.div`
     
    &::before {
        content: '';
        position:absolute;
        top: ${pxToRem(80)};
        right: 0;
        width: 100%;
        height: 100%;
        background: url(${Images.pricing_parttern}) 50% 0% / 100% auto no-repeat;
    }
`
const SContentContainer = styled(LoginContainer)`
    padding-top: ${pxToRem(80)}
`;
const PlanContainer = styled.div`
    display:flex;
    align-items:center;
    margin: ${pxToRem(30)} 0 ${pxToRem(40)};
    z-index: 99;
    > * {
        &:nth-child(2) {
            content: '';
            margin-left: ${pxToRem(30)};
            margin-right: ${pxToRem(30)};
        }
    }
`;
const PlanDetail = styled.button`
      background: none;
      border: none;
      text-decoration: underline;
      color: ${Color.WHITE};
      font-size: ${pxToRem(16)};
      font-weight: 300;
`;
export default Plan;