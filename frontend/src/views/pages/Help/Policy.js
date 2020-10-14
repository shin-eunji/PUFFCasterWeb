import React from 'react';
import styled from 'styled-components';
import {helpTitle} from "../../components/Data/Help";
import Help from "./index";
import Content from "./Content";

function Policy (props) {

    const {
    } = props;

    return (
        <Container>
            <Help data={helpTitle.policy} />
            <Content data={helpTitle.policy} />
        </Container>
    )
}

const Container = styled.div`
`
export default Policy;