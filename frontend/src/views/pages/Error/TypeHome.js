import React from 'react';
import styled from 'styled-components';
import {Images} from "../../../common/Images";
import {PageTitle} from "../../components/Data/Title";
import AuthText from "../../components/Login/Title";
import {Button} from "../../../common/Button/Button.Styled";
import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../common/Text/Text.Styled";

function TypeHome (props) {

    const {} = props;

    return (
        <Container>
            <img src={Images.img_error} alt="에러 이미지"/>
            <AuthText data={PageTitle.error}/>
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
export default TypeHome;