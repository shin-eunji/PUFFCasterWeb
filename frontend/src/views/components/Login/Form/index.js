import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";

import Input from "./Input";

function Form (props) {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log("Login Success");
        if(!data) {
            console.log("error");
        }
    };

    return (
        <Container onSubmit={handleSubmit(onsubmit)}>
            <Input/>

            <Input type='submit'/>
        </Container>
    )
}

const Container = styled.div`
`
export default Form;