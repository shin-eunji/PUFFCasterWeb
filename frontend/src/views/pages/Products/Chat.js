import React from 'react';
import styled from 'styled-components';

import {Images} from "../../../common/Images";

import Visual from "../../components/Visual";
import {featureData as data} from "../../components/Data/Feature";
import Features from "./Section";

function Chat (props) {

    const {} = props;

    return (
        <Container>
            <Visual sort={'chat'}
                    title={`새로운 커뮤니케이션을\n경험하세요`}
                    description={`퍼프 플레이를 사용하여 시청자가 참여할 수 있는\n재미있는 라이브 스트리밍을 해보세요`}
                    more={`가이드 영상 보기`}
                    downloadIcon={Images.download_icn}
                    download={`퍼프 플레이 사용해보기`}
                    caution={``}
                    thumbnail={Images.visual_chat}
            />
            <Features data={data.chat}/>
        </Container>
    )
}

const Container = styled.div`
`
export default Chat;