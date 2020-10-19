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
            {
                name === 'nickname' &&
                <span className={'default'}>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</span>
            }
            {
                name === 'password' &&
                <span className={'default'}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
            }

            {
                error?.type &&
                <span className={'error'}>필수정보입니다</span>
            }
            {
                error?.type === ValidationTypes.IS_EMAIL &&
                <span>이메일 양식이 올바르지 않습니다.</span>
            }
            {
                error?.type === ValidationTypes.IS_VALID_NICKNAME &&
                <span>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</span>
            }
            {
                error?.type === ValidationTypes.IS_VALID_PASSWORD &&
                <span>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
            }
            {
                error?.type === ValidationTypes.REPEAT_PASSWORD &&
                <span>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
            }

            {

            }

        </Container>
    )
}

const Container = styled.div`
    position:relative;
    span {
        position: absolute;
        top: ${pxToRem(-25)};
        font-size: ${pxToRem(11)};
        font-weight: 300;
        z-index: 10;
        
    }
    .default {
        color: #666;
    }
    .error {
        color: ${Color.RED};
    }
}
`
export default FormMessage;