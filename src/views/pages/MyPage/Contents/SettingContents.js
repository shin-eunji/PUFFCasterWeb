import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Color} from "../../../../common/Color/Color.Styled";
import {useSelector} from "react-redux";
import {appActions} from "../../../../redux/actionCreators";

function SettingContents(props) {

    const {} = props;

    const {toggle} = useSelector(state => state.app)

    const handleToggle = () => appActions.updateState({toggle: !toggle})

    return (
        <Container>
            <Item>
                <Text>
                    <Title>알림</Title>
                    <Description>이메일로 각종 이벤트와 혜택에 대한 안내를 발송합니다.
                        단, 중요한 공지사항과 알림은 수신여부와 관계없이 발송됩니다.</Description>
                </Text>
                <Button onClick={handleToggle}>
                    {
                        toggle ?
                            <span className={'on'}>ON</span> : <span className={'off'}>OFF</span>
                    }
                </Button>
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
    padding: ${pxToRem(22)} 0;   
`;
const Text = styled.div`
    width: ${pxToRem(350)};
`;
const Title = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: bold;
    color: #222;
    margin-bottom: ${pxToRem(8)};
`;
const Description = styled.div`
    color: #444;
    font-size: ${pxToRem(14)};
    font-weight: 400;
    
`;
const Button = styled.button`
    display:flex;
    cursor: pointer;
    background:none;
    border: none;
    > * {
        display:flex;
        align-items:center;
        justify-content:center;
        line-height: 1.4;
        width: ${pxToRem(68)};
        height: ${pxToRem(33)};
        border-radius: ${pxToRem(30)};
        background: #fff;
        font-size: ${pxToRem(16)};
        font-weight: 400;
        cursor: pointer;
    }
    .on {
        border: 1px solid ${Color.TOPAZ};
        color: ${Color.TOPAZ};
    }
    .off {
        color: #aaa;
        border: 1px solid #ccc;
    }
`;
export default SettingContents;