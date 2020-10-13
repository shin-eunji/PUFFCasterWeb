import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Item (props) {

    const {
        text,
        url,
        isChecked,
    } = props;

    return (
        <Container>
            <img src={url} alt="체크 이미지"/>
            <Text isChecked={isChecked}>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: ${pxToRem(8)};
    img {
        margin-right: ${pxToRem(10)};
    }
`
const Text = styled.div`
    color: #000;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.7;
    ${props => props.isChecked && `
        text-decoration: line-through;
        color: #ccc;
    `}
`;
export default Item;