import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {useForm} from "react-hook-form";

function Reception(props) {

    const {} = props;

    const {register, handleSubmit} = useForm();


    return (
        <Container>
            <Text>
                <Title>무엇에 대해 문의하시겠습니까?</Title>
                <Description>문의 주신 내용은 메일로 받아보실 수 있습니다.</Description>
            </Text>
            <Content onSubmit={handleSubmit}>
                <input name="email"
                       ref={register}
                       placeholder={'이메일 입력'}
                />
                <select name="gender" ref={register}>
                    <option value="Sign">계정 문의</option>
                    <option value="Login">로그인 문의</option>
                    <option value="Products">상품 문의</option>
                    <option value="Premium">결제 문의</option>
                </select>
                <textarea name="description"
                          ref={register}
                          className={'description'}
                          placeholder={'내용을 입력해주세요'}
                />
                <Button>등록</Button>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: ${pxToRem(20)} auto;
`
const Text = styled.div`
    
`;
const Title = styled.div`
    color: #222;
    font-size: ${pxToRem(18)};
    font-weight: bold;
`;
const Description = styled.div`
    color: #444;
    font-size: ${pxToRem(13)};
    font-weight: 400;
`;

const Content = styled.form`
    input {
        width: 100%;
        height: ${pxToRem(50)};
        border-radius: ${pxToRem(6)};
        border: 1px solid #ccc;
        color: #222;
        font-size: ${pxToRem(15)};
        font-weight: 500;
        padding: ${pxToRem(14)} ${pxToRem(18)};
        margin-top: ${pxToRem(20)};
    }
    textarea {
        width: 100%;
        height: ${pxToRem(274)};
        border-radius: 6px;
        border: 1px solid #ccc;
        overflow-y: scroll;
        padding: ${pxToRem(14)} ${pxToRem(18)};
    }
    select {
        display:flex;
        align-items:center;
        justify-content: space-between;
        width: 100%;
        height: ${pxToRem(50)};
        border-radius: ${pxToRem(6)};
        border: 1px solid #ccc;
        color: #222;
        font-size: ${pxToRem(15)};
        font-weight: 500;
        padding: ${pxToRem(14)} ${pxToRem(18)};
        margin: ${pxToRem(18)} 0;
    }
`;
const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(120)};
    height: ${pxToRem(50)};
    color: #444;
    font-size: ${pxToRem(16)};
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: ${pxToRem(6)};
    margin: ${pxToRem(20)} auto;
`;
export default Reception;