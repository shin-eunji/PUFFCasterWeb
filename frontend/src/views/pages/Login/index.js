import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";

import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

import Login from "./Login";
import Sign from "./Sign";
import User from "./user";
import PasswordNew from "./user/PasswordNew";
import PasswordReset from "./user/PasswordReset";


function auth (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/sign'} component={Sign}/>
                    <Route path={'/users'} component={User}/>
                    <Route path={'/users/password/new'} component={PasswordNew}/>
                    <Route path={'/users/password/reset'} component={PasswordReset}/>
                </Switch>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - ${pxToRem(230)});
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    height: 100%;
`;
export default auth;