import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Images} from "../../../../common/Images";
import firebase from '../../../../lib/Firebase'
import {Color} from "../../../../common/Color/Color.Styled";
import ProfilePopup from "../../../components/Popup/ProfilePopup";
import {useSelector} from "react-redux";
import {profileActions} from "../../../../redux/actionCreators";
import NicknamePopup from "../../../components/Popup/NicknamePopup";

function ProfileContents (props) {

    const {
    } = props;

    const user = firebase.auth().currentUser;
    const { email, nickname } = user || {}


    const {popupProfile, popupNickname}  = useSelector(state => state.profile)

    const onProfile = () => {
        profileActions.updateState({popupProfile: true})
    }

    const onNickname = () => {
        profileActions.updateState({popupNickname: true})
    }

    return (
        <Container>
            <ProfilePhoto onClick={onProfile}/>
            {
                popupProfile &&
                <ProfilePopup popupProfile={onProfile}/>
            }
            <Item>
                <Title className={'nickname'}>닉네임{nickname}</Title>
                <ChangeButton onClick={onNickname}>닉네임 변경</ChangeButton>
                {
                    popupNickname &&
                        <NicknamePopup popupNickname={onNickname}/>
                }
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
const ProfilePhoto = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: ${pxToRem(110)};
    height: ${pxToRem(110)};
    background: url(${Images.profile_img});
    margin-top: ${pxToRem(30)};
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        bottom: ${pxToRem(6)};
        right: ${pxToRem(6)};
        width: ${pxToRem(24)};
        height: ${pxToRem(24)};
        background: url(${Images.profile_edit});
    }
`;
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