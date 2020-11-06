import React from 'react';
import styled from 'styled-components';
import Title from "./Contents/Title";
import {pxToRem} from "../../../common/Text/Text.Styled";
import SettingContents from "./Contents/SettingContents";

function Setting (props) {

    const {} = props;

    return (
        <Container>
            <Title title={'환경 설정'}
                   description={'계정의 각종 환경 설정을 할 수 있습니다.'}
            />
            <SettingContents/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: ${pxToRem(100)};
`
export default Setting;