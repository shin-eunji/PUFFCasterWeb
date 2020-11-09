import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {appActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import {Images} from "../../../../common/Images";
import cn from 'classnames'

function Accordion(props) {

    const {} = props;

    const contents = [
        {
            question: "Title 1",
            answer: "Hi. I love this component. What do you think?"
        },
        {
            question: "See this one too",
            answer: "Yes. You can have more items."
        },
        {
            question: "Thrid thing",
            answer:
                "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?"
        }
    ];

    return (
        <Container>
            <h2>버전 1.0</h2>
            <h2>자주 묻는 질문</h2>
            <AccordionContainer>
                {
                    contents.map(({question, answer}, index) => (
                        <Panel key={index}>
                            <Title>
                                <Text>{question}</Text>
                                <Icon></Icon>
                            </Title>
                            <Description>{answer}</Description>
                        </Panel>
                    ))
                }
            </AccordionContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: ${pxToRem(20)} auto;
    h2 {
        color: #000;
        font-size: ${pxToRem(24)};
        font-weight: bold;
    }
`
const AccordionContainer = styled.div`
    
`;
const Panel = styled.div`
    border-bottom: 1px solid #ccc;
    cursor: pointer;
`;
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    height: ${pxToRem(84)};
`;
const Description = styled.div`
    color: #222;
    font-size: ${pxToRem(15)};
    font-weight: 300;
    margin-bottom: ${pxToRem(30)};
`;
const Text = styled.div`
    color: #222;
    font-size: ${pxToRem(18)};
    font-weight: bold;
`;
const Icon = styled.div`
    width: ${pxToRem(12)};
    height: ${pxToRem(6)};
    background: url(${Images.guide_menu_dropdown_open}) no-repeat;
    transition: .4s;
    transform: rotate(180deg);
    
`;
export default Accordion;