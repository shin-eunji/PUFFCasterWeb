import React from 'react';
import styled from 'styled-components';
import {Input} from "../../../../common/Input/Input.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function InputGroup(props) {

    const {
        type,
        name,
        register,
        placeholder,
        errorType,
    } = props;

    return (
        <Container type={type}
                   name={name}
                   register={register}
                   placeholder={placeholder}
                   errorType={errorType}>
        </Container>
    )
}

const Container = styled(Input)`
    margin-bottom: ${pxToRem(20)};
`
export default InputGroup;