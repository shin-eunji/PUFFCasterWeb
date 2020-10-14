import React from 'react';
import styled from 'styled-components';
import {helpTitle} from "../../components/Data/Help";
import Help from "./index";

function Faq (props) {

    const {} = props;

    return (
        <Container>
            <Help data={helpTitle.faq} />
        </Container>
    )
}

const Container = styled.div`
`
export default Faq;