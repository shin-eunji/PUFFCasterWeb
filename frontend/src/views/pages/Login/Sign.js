import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {navigate} from "../../../lib/History";

import {LoginContainer, SContainer} from "../../../common/Layout/Components.Styled";
import AuthText from "../../components/Login/Text";
import {PageTitle} from "../../components/Data/Title";
import InputGroup from "../../components/Login/Form/Input";
import {authActions} from "../../../redux/actionCreators";
import {Button} from "../../../common/Button/Button.Styled";
import {message, pxToRem} from "../../../common/Text/Text.Styled";

function Sign(props) {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = data => {
        authActions.signUp(data)
        console.log("success");
    };

    return (
        <Container>
            <SContentContainer>
                <AuthText data={PageTitle.sign}/>
                <AuthForm onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup type={"text"}
                                name={"email"}
                                register={register({required: true})}
                                placeholder={'이메일을 입력하세요'}
                                errorType={errors?.email?.type}
                    />
                    {errors.email && "필수 입력 사항입니다."}

                    <InputGroup type={"text"}
                                name={"nickname"}
                                register={register({required: true})}
                                placeholder={'닉네임 입력하세요'}
                                errorType={errors?.nickname?.type}
                    />
                    {errors.email && "필수 입력 사항입니다."}

                    <InputGroup type={"password"}
                                name={"password"}
                                register={register({required: true})}
                                placeholder={'비밀번호를 입력하세요'}
                                errorType={errors?.password?.type}
                    />
                    {errors.password && "필수 입력 사항입니다."}

                    <InputGroup type={"password"}
                                name={"repassword"}
                                register={register({required: true})}
                                placeholder={'비밀번호를 재입력해주세요'}
                                errorType={errors?.repassword?.type}
                    />
                    {errors.password && "필수 입력 사항입니다."}


                    <LoginButton sort={'caster'}
                                 size={'large'}
                                 type={'submit'}>로그인</LoginButton>
                </AuthForm>
                <LoginText sort={'topaz'}
                              onClick={() => navigate('/login')}
                >이미 계정이 있으신가요?</LoginText>

                <Text sort={'gray'}>
                        가입하시면 ABCD의 <Message sort={'topaz'}
                                             onClick={() => navigate('/')}
                >서비스 이용 약관</Message>과 <Message sort={'topaz'}
                                               onClick={() => navigate('/')}
                >개인정보 보호 정책</Message>에<br/>동의하게 됩니다.
                </Text>
            </SContentContainer>
        </Container>
    )
}

const Container = styled(SContainer)`
`
const SContentContainer = styled(LoginContainer)`
    
`;
const AuthForm = styled.form`
    
`;
const LoginButton = styled(Button)`
    
`;
const LoginText = styled(message)`
    margin-top: ${pxToRem(8)};
`;
const Text = styled(message)`
    text-align:center;
    opacity: .3;
    margin-top: ${pxToRem(22)};  
`;
const Message = styled(message)`
    opacity: 1;
    display: inline-block;
`;
const SignText = styled.div`
    
`;
export default Sign;