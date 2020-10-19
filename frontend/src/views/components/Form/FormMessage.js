import React from 'react';
import styled from 'styled-components';
import {ValidationTypes} from "../../../lib/Validate";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function FormMessage (props) {

    const {
        error
    } = props;

    return (
        <Container>
            {
                error?.type === ValidationTypes.IS_EMAIL &&
                <span>이메일 양식이 올바르지 않습니다.</span>
            }
            {
                error?.type === ValidationTypes.IS_VALID_NICKNAME &&
                <span>한글과 영문을 포함한 15자까지 가능합니다. (특수기호 사용 불가)</span>
            }

        </Container>
    )
}

const Container = styled.div`
span {
        position: relative;
        top: ${pxToRem(-14)};
        font-size: ${pxToRem(11)};
        font-weight: 300;
        color: ${Color.RED};
    }
`
export default FormMessage;