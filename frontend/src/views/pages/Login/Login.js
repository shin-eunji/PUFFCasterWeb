import React from 'react';
import styled from 'styled-components';

import {loginText} from "../../components/Data/Login";
import {pxToRem} from "../../../common/Text/Text.Styled";

import AuthText from "../../components/Login/Text";
import Form from "../../components/Login/Form";

function Login (props) {

    const {} = props;

    return (
        <Container>
            <AuthText data={loginText.login}/>
            <Form/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    height: 100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-bottom: ${pxToRem(80)};
`
export default Login;