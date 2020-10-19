import React from 'react';
import styled from 'styled-components';
import {Input} from "../../../../common/Input/Input.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import FormMessage from "../../Form/FormMessage";
import {Button} from "../../../../common/Button/Button.Styled";

function InputGroup(props) {

    const {
        type,
        name,
        register,
        placeholder,
        error,
    } = props;

    return (
        <>
            <Container>
                <InputText type={type}
                           name={name}
                           ref={register}
                           register={register}
                           placeholder={placeholder}
                />

                {
                    name === 'nickname' &&
                    <ChangeButton>중복확인</ChangeButton>
                }
            </Container>
            <FormMessage error={error}/>
        </>
    )

}

const Container = styled.div`
`;
const InputText = styled(Input)`
    margin-bottom: ${pxToRem(20)};
    
    ${props => props.size === 'nickname' && `
       width: ${pxToRem(220)};
    `} 
`
const ChangeButton = styled(Button)`
    width: ${pxToRem(80)};
    height: ${pxToRem(50)};
    font-size: ${pxToRem(14)};
    font-weight: bold;
    border-radius: ${pxToRem(6)};
    background-color: #61717c;
    margin-left: ${pxToRem(20)};
`;
export default InputGroup;