import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {profileActions} from "../../../redux/actionCreators";
import {Button, ButtonGroup} from "../../../common/Button/Button.Styled";
import {navigate} from "../../../lib/History";
import {Images} from "../../../common/Images";
import {useSelector} from "react-redux";
import PhotoPopup from "./PhotoPopup";

function ProfilePopup(props) {

    const {} = props;

    const {popupImage} = useSelector(state => state.profile)

    const handleClose = () => {
        profileActions.updateState({popupProfile: false})
    }

    const onPhoto = () => {
        profileActions.updateState({popupImage: true})
    }

    return (
        <Container onClick={handleClose}>
            <Profile>
                <Title>
                    <h3>프로필 이미지 변경</h3>
                    <p className={'volume'}>* 프로필 이미지로 설정할 사진을 선택해주세요. (최대 2MB)</p>
                    <p className={'message'}>* 이용약관에 위배되는 프로필 이미는 통보없이 삭제될 수 있습니다.</p>
                </Title>
                <ProfileContent>
                    <PhotoProfile></PhotoProfile>
                    <PhotoButtonGroup>
                        <PhotoButton sort={'lineDark'}
                                     size={'small'}
                                     onClick={onPhoto}
                        >사진 변경</PhotoButton>
                        {
                            popupImage &&
                                <PhotoPopup popupImage={onPhoto}/>
                        }
                        <PhotoButton sort={'lineDark'}
                                     size={'small'}
                        >사진 삭제</PhotoButton>
                    </PhotoButtonGroup>
                </ProfileContent>
                <ButtonGroup>
                    <ProfileButton sort={'line'}
                                   size={'small'}
                                   onClick={() => navigate('/mypage')}
                    >확인</ProfileButton>
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
    padding: ${pxToRem(60)};
`;
const Title = styled.div`
    h3 {
        color: #222;
        font-size: ${pxToRem(36)};
        font-weight: bold;
    }
    .volume {
        color: #444;
        font-size: ${pxToRem(15)};
        font-weight: 400;
        line-height: 1.5;
    }
    .message {
        color: #ff0000;
        font-size: ${pxToRem(15)};
        font-weight: 400;
        line-height: 1.5;
    }
`;
const PhotoProfile = styled.div`
    width: ${pxToRem(110)};
    height: ${pxToRem(110)};
    background: url(${Images.profile_img});
`;
const ProfileContent = styled.div`
    display:flex;
    align-items:center;  
    justify-content: space-between;
    margin: ${pxToRem(22)} 0 ${pxToRem(68)};
`;
const PhotoButtonGroup = styled.div`
     display:flex;
     align-items:center;
`;
const PhotoButton = styled(Button)`
    width: ${pxToRem(120)};
    height: ${pxToRem(50)};
    margin-left: ${pxToRem(20)};  
`;
const ProfileButton = styled(Button)`
    width: ${pxToRem(150)};
     height: ${pxToRem(50)};
`;
export default ProfilePopup;