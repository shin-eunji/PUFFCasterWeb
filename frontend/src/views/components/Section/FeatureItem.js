import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {navigate} from "../../../lib/History";

function FeatureItem(props) {

    const {
        thumbnail,
        title,
        description,
        reverse,
    } = props;

    return (
        <Container className={cn({reverse})}>
            <SContentContainer>
                <Text className={cn({reverse})}>
                    <Thumbnail>{thumbnail}</Thumbnail>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Text>
                <Preview onClick={() => navigate('/products/cam/detail')}></Preview>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    margin: 150px 0;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    .reverse & {
        flex-direction: row-reverse;
    }
`;
const Text = styled.div`
    flex: 1;
    width: ${pxToRem(320)};
    white-space: pre-wrap;
    .reverse & {
        margin-left: ${pxToRem(60)};
    }
`;
const Thumbnail = styled.div`
    color: ${Color.TOPAZ};
    font-size: ${pxToRem(18)};
    font-weight: 900;
    margin-bottom: 20px;
`;
const Title = styled.h3`
    color: #000;  
    font-size: ${pxToRem(38)};
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: ${pxToRem(30)};
`;
const Description = styled.p`
    color: #222;
    font-size: ${pxToRem(18)};
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.8;
`;
const Preview = styled.div`
    width: ${pxToRem(760)};
    height: ${pxToRem(500)};
    border-radius: ${pxToRem(6)};
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
    background-color: #272c33;
    cursor: pointer;
`;
export default FeatureItem;