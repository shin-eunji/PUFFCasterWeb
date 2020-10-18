import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

import {Button} from '../../../common/Button/Button.Styled';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";


function Member({user, onLoad}) {

    return (
        <Container>
            {
                onLoad &&
                    <>
                        {
                            user ?
                                (<UserInfo onClick={() => navigate('/mypage')}>
                                    <UserName>
                                        <div>{user?.email}</div>
                                        <span>님</span>
                                    </UserName>
                                </UserInfo>) : (<LoginButton sort={'lime'}
                                                  size={'small'}
                                                  onClick={() => navigate('/signin')}
                            >로그인
                            </LoginButton>)
                        }

                    </>
            }
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
const UserInfo = styled.div`
    cursor: pointer;
`;
const UserName = styled.div`
  display:flex;
  align-items:center;
  > div {
      font-size: 15px;
      flex: 1;
      font-weight:400;
      color: ${Color.WHITE};
      display:block; 
      width: ${pxToRem(100)}; 
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: right;
  }
  > span {
      opacity: .6;
  }
`;
export default Member;