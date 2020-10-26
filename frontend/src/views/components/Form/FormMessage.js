import React from 'react';
import styled from 'styled-components';
import {ValidationTypes} from "../../../lib/Validate";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function FormMessage(props) {

    const {
        name,
        error,
    } = props;

    return (
        <Container>
            {/*{*/}
            {/*    name === 'nickname' &&*/}
            {/*    <ErrorMessage className={'default'}>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</ErrorMessage>*/}
            {/*}*/}
            {
                name === 'password' &&
                <ErrorMessage className={'default'}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</ErrorMessage>
            }

            {
                error?.type === "required" && <ErrorMessage className={'error'}>필수정보 입니다.</ErrorMessage>
            }

            {
                error?.type === ValidationTypes.IS_EMAIL && name !== 'email' &&
                <ErrorMessage className={'error'}>이메일 양식이 올바르지 않습니다.</ErrorMessage>
            }
                {name === 'nickname' ?
                (<ErrorMessage className={'default'}>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</ErrorMessage>) :
                (error?.type === ValidationTypes.IS_VALID_NICKNAME && name !== 'nickname' &&
                <ErrorMessage className={'error'}>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</ErrorMessage>)
            }
            {
                error?.type === ValidationTypes.IS_VALID_PASSWORD && name !== 'password' &&
                <ErrorMessage className={'error'}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</ErrorMessage>
            }
            {
                error?.type === ValidationTypes.REPEAT_PASSWORD &&
                <ErrorMessage className={'error'}>비밀번호가 일치하지 않습니다.</ErrorMessage>
            }

            {
                error?.type === "maxLength" &&
                <ErrorMessage className={'error'}>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</ErrorMessage>
            }

        </Container>
    )
}

const Container = styled.div`
    position:relative;
`;
const ErrorMessage = styled.div`
    position: absolute;
    top: ${pxToRem(-25)};
    font-size: ${pxToRem(11)};
    font-weight: 300;
    z-index: 10;
    &.isActive {
        opacity: 1;
    }
    &.error {
        opacity: 1;
        color: ${Color.RED};
        ${props => props.name && `
            opacity: 0;
        `}
    }   
    &.default {
        color: #666;
        ${props => props.name && `
            opacity: 0;
        `}
    }
    &.success {
        color: ${Color.TOPAZ};
    }
`;
export default FormMessage;