import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {navigate} from "../../../../lib/History";

import {LoginContainer, SContainer} from "../../../../common/Layout/Components.Styled";
import AuthText from "../../../components/Login/Title";
import {PageTitle} from "../../../components/Data/Title";
import InputGroup from "../../../components/Login/Form/Input";
import {authActions} from "../../../../redux/actionCreators";
import {Button} from "../../../../common/Button/Button.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function PasswordNew(props) {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = data => {
        authActions.signUp(data)
        console.log("success");
    };

    return (
        <Container>
            <SContentContainer>
                <AuthText data={PageTitle.passwordNew}/>
                <AuthForm onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup type={"password"}
                                name={"password"}
                                register={register({required: true})}
                                placeholder={'새 비밀번호 입력'}
                                errorType={errors?.password?.type}
                    />
                    {errors.password && "필수 입력 사항입니다."}

                    <InputGroup type={"password"}
                                name={"password"}
                                register={register({required: false})}
                                placeholder={'새 비밀번호 확인'}
                                errorType={errors?.password?.type}
                    />
                    {errors.password && "필수 입력 사항입니다."}

                    <LoginButton sort={'caster'}
                                 size={'large'}
                                 type={'submit'}
                                 onClick={() => navigate('/login')}
                    >비밀번호 변경</LoginButton>
                </AuthForm>
            </SContentContainer>
        </Container>
    )
}

const Container = styled(SContainer)`
`
const SContentContainer = styled(LoginContainer)`
    display:flex;
    height: 100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-bottom: ${pxToRem(80)};
`;
const AuthForm = styled.form`
    
`;
const LoginButton = styled(Button)`
    margin-top: ${pxToRem(30)};    
`;


export default PasswordNew;