import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Button, ButtonGroup} from "../../../common/Button/Button.Styled";
import {navigate} from "../../../lib/History";
import {profileActions} from "../../../redux/actionCreators";
import {Color} from "../../../common/Color/Color.Styled";

function NicknamePopup(props) {

    const {} = props;

    const closeNickname = () => {
        profileActions.updateState({popupNickname: false})
    }


    return (
        <Container onClick={closeNickname}>
            <Profile>
                <Title>
                    <h3>닉네임 변경</h3>
                    <p className={'message'}>* 이용약관에 위배되는 닉네임은 통보없이 변경될 수 있습니다.</p>
                </Title>
                <Contents>
                    <form>
                        <input type="text"/>
                        <button>중복확인</button>
                    </form>
                    <Volume>특수기호와 공백은 사용이 불가능합니다.</Volume>
                </Contents>
                <ButtonGroup>
                    <ChangeButton sort={'line'}
                                  size={'small'}
                                  onClick={() => navigate('/mypage')}
                    >확인</ChangeButton>
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
    .message {
        color: #ff0000;
        font-size: ${pxToRem(15)};
        font-weight: 400;
        line-height: 1.5;
    }
`;
const Contents = styled.div`
    flex: 1;
    margin-top: ${pxToRem(50)};
    form {
        display:flex;
        align-items:center;
        justify-content: space-between;
        input {
            width: ${pxToRem(320)};
            height: ${pxToRem(50)};
            background: ${Color.WHITE};
            border: 1px solid #ccc;
            border-radius: 6px;
        }
        button {
            display:flex;
            align-items:center;
            justify-content:center;
            width: ${pxToRem(80)};
            height: ${pxToRem(50)};
            border: none;
            border-radius: 6px;
            background: #61717c;
            color: ${Color.DARK};
        }
    }
`;
const Volume = styled.div`
    color: #444;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.5;
    margin-top: ${pxToRem(5)};
`;
const ChangeButton = styled(Button)`
    width: ${pxToRem(150)};
     height: ${pxToRem(50)};
`;
export default NicknamePopup;