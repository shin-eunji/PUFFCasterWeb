import React from 'react';
import styled from 'styled-components';
import {helpTitle} from "../../components/Data/Help";
import Help from "./index";
import {pxToRem} from "../../../common/Text/Text.Styled";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import BoardList from "./Content/BoardList";
import Reception from "./Content/Reception";
import {ContentContainer} from "../../../common/Layout/Components.Styled";

function Faq(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Help data={helpTitle.faq}/>
                <Content>
                    <Tabs>
                        <TabTitle>
                            <Title>자주 묻는 질문</Title>
                            <Title>문의 등록</Title>
                        </TabTitle>

                        <TabPanel>
                            <BoardList/>
                        </TabPanel>
                        <TabPanel>
                            <Reception/>
                        </TabPanel>
                    </Tabs>
                </Content>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: ${pxToRem(160)} 0 ${pxToRem(150)};
`
const SContentContainer = styled(ContentContainer)`
    
`;
const Content = styled.div`
    
`;
const TabTitle = styled(TabList)`
    display:flex;
    align-items:center;
    justify-content: center;
`;
const Title = styled(Tab)`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(400)};
    height: ${pxToRem(58)};
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #444;
    color: #666;
    font-size: ${pxToRem(16)};
    font-weight: 500;
    &.react-tabs__tab--selected {
        border: 1px solid #444;
        border-bottom: transparent;
        color: #000;
        font-size: ${pxToRem(16)};
        font-weight: 500;
    }
`;
export default Faq;