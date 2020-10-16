import React from 'react';
import styled from 'styled-components';
import {Images} from "../../../common/Images";
import {PageTitle} from "../../components/Data/Title";
import AuthText from "../../components/Login/Title";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Type (props) {

    const {} = props;

    return (
        <Container>
            <img src={Images.img_error} alt="에러 이미지"/>
            <AuthText data={PageTitle.error}/>
            <Text>원하시는 웹페이지를 찾을 수 없거나 다른 메뉴로 이동한 경우<br/>
                서비스 수행 중 일시적인 장애가 발생한 경우<br/>
                이동의 폭주로 서비스가 지연되는 경우<br/>
                해당 페이지에 대한 접근이 허가되지 않은 경우</Text>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Text = styled.div`
    position:relative;
    top: ${pxToRem(-20)};
    font-size: ${pxToRem(15)};
    color: #7e858b;
    font-weight: 300;
    line-height: 1.3;
    text-align:center;
`;
export default Type;