import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {navigate} from "../../../lib/History";

import {LoginContainer, SContainer} from "../../../common/Layout/Components.Styled";
import {PageTitle} from "../../components/Data/Title";
import {authActions} from "../../../redux/actionCreators";
import {Button} from "../../../common/Button/Button.Styled";
import {message, pxToRem} from "../../../common/Text/Text.Styled";

import AuthText from "../../components/Login/Title";
import InputGroup from "../../components/Login/Form/Input";
import {Color} from "../../../common/Color/Color.Styled";
import Validation, {ValidationTypes} from "../../../lib/Validate";
import FormMessage from "../../components/Form/FormMessage";

function SignUp() {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => authActions.signUp(data);
    console.log("errors", errors);

    return (
        <Container>
            <SContentContainer>
                <AuthText data={PageTitle.sign}/>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <InputGroup type="text"
                                name="email"
                                placeholder='이메일을 입력하세요'
                                register={register({
                                    required: true,
                                    validate: {
                                        [ValidationTypes.IS_EMAIL]: value => Validation.isEmail(value),
                                    },
                                })}
                                error={errors.email}
                    />

                    <InputGroup type={"text"}
                                name={"nickname"}
                                placeholder={'닉네임 입력하세요'}
                                errorType={errors?.nickname?.type}
                                register={register({
                                    required: true,
                                    validate: {
                                        [ValidationTypes.IS_VALID_NICKNAME]: value => Validation.isValidNickname(value),
                                    },
                                })}
                                error={errors.nickname}/>

                    <InputGroup type="password"
                                name="password"
                                register={register({required: true})}
                                placeholder='비밀번호를 입력하세요'
                                errorType={errors?.password?.type}
                    />
                    {errors.password && <span>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>}

                    <InputGroup type={"password"}
                                name={"passwordRe"}
                                register={register}
                                placeholder={'비밀번호를 재입력해주세요'}
                                errorType={errors?.passwordRe?.type}
                    />
                    {errors.passwordRe && <span>비밀번호가 일치하지 않습니다.</span>}

                    <LoginButton sort={'caster'}
                                 size={'large'}
                    >가입하기</LoginButton>

                </form>
                <LoginText sort={'topaz'}
                           onClick={() => navigate('/login')}
                >이미 계정이 있으신가요?</LoginText>

                <Text sort={'gray'}>
                    가입하시면 ABCD의 <Message sort={'topaz'}
                                         onClick={() => navigate('/terms')}
                >서비스 이용 약관</Message>과 <Message sort={'topaz'}
                                               onClick={() => navigate('/policy')}
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
const LoginButton = styled(Button)`
    
`;
const LoginText = styled(message)`
    margin-top: ${pxToRem(8)};
`;
const Text = styled(message)`
    text-align:center;
    margin-top: ${pxToRem(22)};  
`;
const Message = styled(message)`
    display: inline-block;
    cursor: pointer;
`;
export default SignUp;