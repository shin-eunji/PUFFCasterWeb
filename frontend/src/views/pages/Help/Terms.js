import React from 'react';
import styled from 'styled-components';
import {helpTitle} from "../../components/Data/Help";
import Help from "./index";
import Content from "./Content";

function Terms (props) {

    const {} = props;

    return (
        <Container>
            <Help data={helpTitle.terms} />
            <Content data={helpTitle.terms} />
        </Container>
    )
}

const Container = styled.div`
`
export default Terms;