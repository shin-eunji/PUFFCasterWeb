import React from 'react';
import styled from 'styled-components';

import {Images} from "../../../common/Images";

import Visual from "../../components/Visual";
import {featureData as data} from "../../components/Data/Feature";
import Features from "./Section";


function Cam (props) {

    const {} = props;

    return (
        <Container>
            <Visual sort={'cam'}
                    title={`어디서든 가능한\n모바일 라이브 스트리밍`}
                    description={`별도의 장비 없이 스마트폰 만으로 높은 품질의 라이브 스트리밍이 가능하며,\nCASTER와 연동하여 더욱 풍성한 라이브 스트리밍을 진행할 수 있습니다.`}
                    more={`메뉴얼 상세보기`}
                    downloadIcon={Images.apple_icn}
                    download={`App Store 다운로드`}
                    caution={`iPhone X 이상 (iOS 13.5 이상)`}
                    thumbnail={Images.visual_caster}
            />
            <Features data={data.cam}/>
        </Container>
    )
}

const Container = styled.div`
`
export default Cam;