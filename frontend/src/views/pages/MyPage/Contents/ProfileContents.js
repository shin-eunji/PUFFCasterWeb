import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Images} from "../../../../common/Images";
import firebase from '../../../../lib/Firebase'
import {Color} from "../../../../common/Color/Color.Styled";

function ProfileContents (props) {

    const {
    } = props;

    const user = firebase.auth().currentUser;

    const { email, nickname } = user || {}

    return (
        <Container>
            <Item>
                <Title className={'nickname'}>닉네임{nickname}</Title>
                <ChangeButton>닉네임 변경</ChangeButton>
            </Item>

            <Item>
                <Title>이메일</Title>
                <Description className={'email'}>{email}</Description>
            </Item>

            <Item>
                <Title>암호</Title>
                <ChangeButton>변경</ChangeButton>
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
    &.nickname {
        color: ${Color.TOPAZ};
    }
`;
const Description = styled.div`
    
    &.email {
        color: ${Color.TOPAZ};
        font-size: ${pxToRem(14)};
        font-weight: 500;
    }
`;
const ChangeButton = styled.div`
    position:relative;
    top: 0;
    right: 0;
    color: #666;
    font-size: ${pxToRem(14)};
    font-weight: 500;
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        top: ${pxToRem(4)};
        width: ${pxToRem(13)};
        height: ${pxToRem(13)};
        background: url(${Images.gnb_dropdown_open}) 100% 50% no-repeat;
    }
`;
export default ProfileContents;