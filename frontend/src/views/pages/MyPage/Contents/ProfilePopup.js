import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {profileActions} from "../../../../redux/actionCreators";
import {Button, ButtonGroup} from "../../../../common/Button/Button.Styled";

function ProfilePopup(props) {

    const {

    } = props;

    const handleClose = () => {
        profileActions.updateState({popupProfile: false})
    }

    return (
        <Container onClick={handleClose}>
            <Profile>
                <Text>프로필 이미지 편집</Text>
                <Image></Image>
                <ButtonGroup>
                    <PopupButton sort={'line'}
                                 size={'small'}
                                 onClick={handleClose}
                    >취소</PopupButton>
                    <PopupButton sort={'line'}
                                 size={'small'}
                    >확인</PopupButton>
                </ButtonGroup>
            </Profile>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 1000;
`
const Profile = styled.div`
    display:flex;
    flex-direction:column;
    width: ${pxToRem(540)};
    height: ${pxToRem(460)};
    background: #fff;
`;
const Text = styled.div`
    color: #222;
    font-size: ${pxToRem(20)};
    font-weight: bold;
    padding: ${pxToRem(10)};
`;
const Image = styled.div`
    flex: 1;
    background: #000;
`;
const PopupButton = styled(Button)`
     width: ${pxToRem(150)};
     height: ${pxToRem(50)};
`;
export default ProfilePopup;