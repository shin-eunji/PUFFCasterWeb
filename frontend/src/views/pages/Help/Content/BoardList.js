import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {appActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import {Images} from "../../../../common/Images";

function BoardList (props) {

    const {} = props;

    const toggleDrop = () => {
        appActions.updateState({dropdown: !dropdown})
    }

    const {dropdown} = useSelector(state => state.app)

    const list = {
        contents: [
            {
                title: "Title 1",
                body: "Hi. I love this component. What do you think?"
            },
            {
                title: "See this one too",
                body: "Yes. You can have more items."
            },
            {
                title: "Thrid thing",
                body:
                    "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?"
            }
        ]
    };

    return (
        <Container>
            <h2>버전 1.0</h2>
            <h2>자주 묻는 질문</h2>
            <BoardContent>
                <Content>
                    <Title onClick={toggleDrop}>
                        <Text>자주 묻는 질문 1</Text>
                        <Icon></Icon>
                    </Title>
                    {
                        dropdown &&
                        <Description>
                            본문텍스트 Regular 강조는 medium
                            본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스
                            트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍
                            스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스트본문텍스
                            링크는 medium
                        </Description>

                    }
                </Content>
            </BoardContent>
        </Container>
    )
}

const Container = styled.div`
    width: ${pxToRem(800)};
    margin: ${pxToRem(20)} auto;
    h2 {
        color: #000;
        font-size: ${pxToRem(24)};
        font-weight: bold;
    }
`
const BoardContent = styled.div`
    
`;
const Content = styled.div`
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
export default BoardList;