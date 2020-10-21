import React from 'react';
import styled from 'styled-components';
import Type from "./Type";
import {LoginContainer, SContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import TypeHome from "./TypeHome";
import {Switch, Route} from "react-router-dom";
import TypePay from "./TypePay";

function Error(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Switch>
                    <Route path={'/error/type1'} component={TypeHome}/>
                    <Route path={'/error/type2'} component={Type}/>
                    <Route path={'/error/pay'} component={TypePay}/>
                </Switch>
            </SContentContainer>
        </Container>

    )
}

const Container = styled(SContainer)`
`
const SContentContainer = styled(LoginContainer)`
`;

export default Error;