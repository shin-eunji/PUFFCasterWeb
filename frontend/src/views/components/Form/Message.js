import React from 'react';
import styled from 'styled-components';
import {ValidationTypes} from "../../../lib/Validate";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function Message(props) {

    const {
        error,
    } = props;

    return (
        <Container>

            {
                error?.type === "required" && <Error>필수 정보 입니다.</Error>
            }


            {
                error?.type === ValidationTypes.IS_EMAIL && <Error>이메일 양식이 올바르지 않습니다.</Error>
            }

            {
                error?.type === ValidationTypes.IS_VALID_PASSWORD && <Error>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</Error>
            }

            {
                error?.type === ValidationTypes.REPEAT_PASSWORD && <Error>비밀번호가 일치하지 않습니다.</Error>
            }

            {
                error?.type === "maxLength" && <Error>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</Error>
            }

        </Container>
    )
}

const Container = styled.div`
    position:relative;
`;
const Error = styled.div`
    position: absolute;
    top: ${pxToRem(-25)};
    font-size: ${pxToRem(11)};
    font-weight: 300;
    z-index: 10;
    opacity: 1;
    color: ${Color.RED};
    ${props => props.name && `
        opacity: 0;
    `}
    &.isActive {
        opacity: 1;
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
export default Message;