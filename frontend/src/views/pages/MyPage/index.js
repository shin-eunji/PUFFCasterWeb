import React, {useEffect} from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import Profile from "./Profile";
import Price from "./Price";
import Setting from "./Setting";
import {pxToRem} from "../../../common/Text/Text.Styled";

function MyPage(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Profile/>
                <Price/>
                <Setting/>
                <SignButton>
                    <Text>로그아웃</Text>
                    <Text>회원탈퇴</Text>

                </SignButton>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-top: ${pxToRem(80)};
    padding-bottom: ${pxToRem(150)};
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center; 
`;
const SignButton = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: ${pxToRem(440)};
    margin-top: ${pxToRem(100)};
`;
const Text = styled.button`
    border: none;
    background: none;
    color: #222;
    font-size: ${pxToRem(16)};
    font-weight: 500;
    margin-bottom: ${pxToRem(10)};
    cursor: pointer;
`;
export default MyPage;