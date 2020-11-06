import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";

import {Button} from "../../../../common/Button/Button.Styled";
import {Input} from "../../../../common/Input/Input.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Form() {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log("Index Success");
        if (!data) {
            console.log("error");
        }
    };

    return (
        <Container>
            <AuthForm onSubmit={handleSubmit(onSubmit)}>
                <InputGroup type="text"
                            name="email"
                            register={register({required: true})}
                            placeholder='이메일을 입력하세요'
                            errorType={errors?.email?.type}
                />

                <InputGroup type="password"
                            name="password"
                            register={register({required: true})}
                            placeholder='비밀번호를 입력하세요'
                            errorType={errors?.password?.type}
                />

                <LoginButton sort={'caster'}
                             size={'large'}
                             type={'submit'}>로그인</LoginButton>
            </AuthForm>
        </Container>
    )
}

const Container = styled.div`
`
const InputGroup = styled(Input)`
    margin-bottom: ${pxToRem(30)};
`;
const AuthForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;
const LoginButton = styled(Button)`
    margin-top: ${pxToRem(20)};
`;
export default Form;