import React from 'react';
import styled from 'styled-components';
import {customMedia, LoginContainer, SContainer} from "../../../../common/Layout/Components.Styled";
import {PageTitle} from "../../../components/Data/Title";
import AuthText from "../../../components/Login/Title";
import {Images} from "../../../../common/Images";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Button} from "../../../../common/Button/Button.Styled";
import {navigate} from "../../../../lib/History";

function Email (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <img src={Images.img_email} alt="email"/>
                <AuthText data={PageTitle.email}/>

                <NoticeContent>
                    <h5>유의사항</h5>
                    <p>1. 인증 메일은 발송 시점으로부터 1시간 동안만 유효하며, 재발송 시 기존 인증 코드는 만료됩니다.<br/>
                        반드시 마지막에 수신된 메일을 확인바랍니다.<br/>
                        2. 메일이 도착하지 않았다면 스팸함을 확인해 주시기 바랍니다.</p>
                    <SendButton sort={'line'}
                                onClick={() => navigate('/users/password/new')}
                    >인증 메일 재발송</SendButton>
                </NoticeContent>
            </SContentContainer>
        </Container>
    )
}

const Container = styled(SContainer)`
    ${customMedia.lessThan('mobile')`
        height: 100%;
    `}
`
const SContentContainer = styled(LoginContainer)`
   img {
      margin-bottom: ${pxToRem(35)};
   }
   ${customMedia.lessThan('mobile')`
        margin: 0 ${pxToRem(30)};
    `}
`;
const NoticeContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(720)};
    border-radius: ${pxToRem(6)};
    background: #1b2227;
    padding: ${pxToRem(40)} ${pxToRem(68)};
    text-align:center;
    h5 {
        color: #a1a7ac;
        font-size: ${pxToRem(15)};
        font-weight: 500;
        margin-bottom: ${pxToRem(12)};
    }
    p {
        color: #7e858b;
        font-size: ${pxToRem(14)};
        font-weight: 300;
    }
    ${customMedia.lessThan('mobile')`
        width: 100%;
        padding: ${pxToRem(40)} ${pxToRem(32)};
    `}
`;
const SendButton = styled(Button)`
    width: ${pxToRem(180)};
    height: ${pxToRem(50)};
    margin-top: ${pxToRem(30)};
`;
export default Email;