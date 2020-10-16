import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

import {Button} from '../../../common/Button/Button.Styled';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {authActions} from "../../../redux/actionCreators";
import {Color} from "../../../common/Color/Color.Styled";


function Member() {

    const user = user => {
        authActions.signIn(user)
    }

    return (
        <Container>
            <LoginButton sort={'lime'}
                         size={'small'}
                         onClick={() => navigate('/login')}
            >로그인
            </LoginButton>

            {/*{*/}
            {/*    user ?*/}
            {/*    (<Title>*/}
            {/*        <Name>{user}</Name>*/}
            {/*    </Title>)*/}
            {/*         :*/}
            {/*    (<LoginButton sort={'lime'}*/}
            {/*                 size={'small'}*/}
            {/*                 onClick={() => navigate('/login')}*/}
            {/*    >로그인*/}
            {/*    </LoginButton>)*/}

            {/*}*/}
        </Container>
    )
}

const Container = styled.div`
    width: ${pxToRem(210)};
    display:flex;
    justify-content:flex-end;
`
const LoginButton = styled(Button)`
       
       
`;
const Text = styled.div`
    display:flex;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight:bold;
  color: ${Color.WHITE}; 
  
    
`;
export default Member;