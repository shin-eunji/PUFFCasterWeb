import React from 'react';
import styled from 'styled-components';

import {Images} from "../../../common/Images";

import Visual from "../../components/Visual";
import Features from "./Section";
import {featureData as data} from "../../components/Data/Feature";


function Caster(props) {

    const {} = props;

    return (
        <Container>
            <Visual sort={'caster'}
                    title={`지금까지 볼 수 없었던,\n라이브 스트리밍 프로그램`}
                    description={`Caster의 특별한 기능들을 사용하여 지금까지 경험해보지 못한\n특별한 라이브 스트리밍을 만들어보세요`}
                    more={`메뉴얼 상세보기`}
                    downloadIcon={Images.apple_icn}
                    download={`PUFFCASTER 다운로드`}
                    caution={`Window 64비트 또는 그 이상 (Ver. 10.13.5)`}
                    thumbnail={Images.visual_caster}
            />
            <Features data={data.caster}/>
        </Container>
    )
}

const Container = styled.div`
    
`

export default Caster;