import React from 'react';
import styled from 'styled-components';
import {Images} from "../../../common/Images";
import AuthText from "../../components/Login/Text";
import {PageTitle} from "../../components/Data/Title";
import {navigate} from "../../../lib/History";
import {Button} from "../../../common/Button/Button.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

function TypePay (props) {

    const {} = props;

    return (
        <Container>
            <img src={Images.img_error} alt="에러 이미지"/>
            <AuthText data={PageTitle.errorPay}/>
            <HomeButton sort={'line'}
                        onClick={() => navigate('/')}
            >홈페이지로 돌아가기</HomeButton>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const HomeButton = styled(Button)`
    width: ${pxToRem(200)};
    height: ${pxToRem(50)};
`;
export default TypePay;