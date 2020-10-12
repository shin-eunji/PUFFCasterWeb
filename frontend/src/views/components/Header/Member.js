import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

import {Button} from '../../../common/Button/Button.Styled';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Member (props) {

    const {} = props;

    return (
        <Container>
            <LoginButton sort={'lime'}
                         size={'small'}
                         onClick={() => navigate('/login')}
            >로그인</LoginButton>
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
export default Member;