import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";


import {PageTitle} from "../../components/Data/Title";
import AuthText from "../../components/Login/Title";
import InputGroup from "../../components/Login/Form/Input";

import {Button} from "../../../common/Button/Button.Styled";
import {message, pxToRem} from "../../../common/Text/Text.Styled";
import {authActions} from "../../../redux/actionCreators";
import {navigate} from "../../../lib/History";
import {LoginContainer, SContainer} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import Validation, {ValidationTypes} from "../../../lib/Validate";

function SignIn() {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = data => {
        authActions.signIn(data)
        console.log("success");
    };

    return (
        <Container>
            <SContentContainer>
                <AuthText data={PageTitle.login}/>
                <AuthForm onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup type={"text"}
                                name={"email"}
                                placeholder={'이메일을 입력하세요'}
                                register={register({
                                    required: true,
                                    minLength: 8,
                                    maxLength: 16,
                                    validate: {
                                        [ValidationTypes.IS_EMAIL]: value => Validation.isEmail(value),
                                    },
                                })}
                                error={errors.email}
                    />

                    <InputGroup type={"password"}
                                name={"password"}
                                placeholder={'비밀번호를 입력하세요'}
                                register={register({
                                    required: true,
                                    minLength: 8,
                                    maxLength: 16,
                                    validate: {
                                        [ValidationTypes.IS_VALID_PASSWORD]: value => Validation.isValidPassword(value),
                                    },
                                })}
                                error={errors.password}
                    />
                    <PasswordText sort={'topaz'}
                                  onClick={() => navigate('/users/password/reset')}
                    >비밀번호를 잊으셨나요?</PasswordText>
                    <LoginButton sort={'caster'}
                                 size={'large'}
                                 type={'submit'}>로그인</LoginButton>
                </AuthForm>

                <Text>
                    <Message sort={'gray'}>계정이 필요하세요?</Message>
                    <SignText sort={'topaz'}
                              onClick={() => navigate('/signup')}
                    >가입하기</SignText>
                </Text>
            </SContentContainer>
        </Container>
    )
}
const Container = styled(SContainer)`
`
const SContentContainer = styled(LoginContainer)`
    
`
const AuthForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    span {
        position: relative;
        top: ${pxToRem(-14)};
        font-size: ${pxToRem(11)};
        font-weight: 300;
        color: ${Color.RED};
    }
`;
const LoginButton = styled(Button)`
    margin-top: ${pxToRem(20)};
`;
const Text = styled.div`
    position: relative;
    top: 10px;
    left: 0;
    width: ${pxToRem(320)};
    display:flex;
`;
const PasswordText = styled(message)`
    position:relative;
    top: ${pxToRem(-12)};
    cursor: pointer;
`;
const Message = styled(message)`
    margin-right: ${pxToRem(6)};
    opacity: .3;
`;
const SignText = styled(message)`
    cursor: pointer;
`;
export default SignIn;