import React from 'react';
import styled from 'styled-components';
import {helpTitle} from "../../components/Data/Help";
import Help from "./index";
import Content from "./Content";
import {pxToRem} from "../../../common/Text/Text.Styled";

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
    margin: ${pxToRem(160)} 0 ${pxToRem(150)};
`
export default Terms;