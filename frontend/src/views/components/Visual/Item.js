import React from 'react';
import styled from 'styled-components';

import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {Button} from "../../../common/Button/Button.Styled";
import {Images} from "../../../common/Images";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

import Nav from "../Navigation/Nav";
import Dots from "./Dots";

function Item (props) {

    const {
        title,
        description,
        more,
        downloadIcon,
        download,
        sort,
        caution,
        thumbnail,
    } = props;

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="more">
                        {more}
                    </div>
                    <DownloadButton sort={sort}
                                    size={'medium'}
                    >
                        <img src={downloadIcon} alt="Download"/>
                        {download}
                    </DownloadButton>
                    <div className="caution">{caution}</div>
                    <div className="platform">
                        <h5>연동 플랫폼</h5>
                        <PlatformIcon>
                            <img src={Images.caster_youtube} alt="youtube 플랫폼"/>
                            <img src={Images.caster_twitch} alt="twitch 플랫폼"/>
                            <img src={Images.caster_facebook} alt="facebook 플랫폼"/>
                            <img src={Images.caster_mixer} alt="mixer 플랫"/>
                        </PlatformIcon>
                    </div>
                </Text>
                <Thumbnail>
                    <img src={thumbnail} alt="썸네일 이미지"/>
                </Thumbnail>

            </SContentContainer>

            <Dots sort={sort}/>

            <Nav sort={sort}/>
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.DARK};
`
const SContentContainer = styled(ContentContainer)`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display:flex;
    align-items: flex-start;
    height: ${pxToRem(700)};
    white-space: pre-wrap;
    padding-top: ${pxToRem(125)};
    
    &::before {
        content: '';
        position: absolute;
        top: ${pxToRem(92)};
        left: ${pxToRem(-80)};
        width: ${pxToRem(430)};
        height: ${pxToRem(364)};
        background: url(${Images.parttern1});
    }
    
    &::after {
        content: '';
        position: absolute;
        top: ${pxToRem(20)};
        right: ${pxToRem(-75)};
        width: ${pxToRem(470)};
        height: ${pxToRem(600)};
        background: url(${Images.parttern2});
    }
`;
const Text = styled.div`
    flex: 1;
    h2 {
        color: ${Color.WHITE};
        font-size: ${pxToRem(48)};
        font-weight: bold;
        line-height: 1.3;
        margin-bottom: ${pxToRem(35)}; 
    }
    p {
        color: #ccc;
        font-size: ${pxToRem(18)};
        font-weight: 300;
        line-height: 1.7;
        margin-bottom: ${pxToRem(14)}; 
    }
    .more {
        display:flex;
        align-items:center;
        justify-content:flex-start;
        color: ${Color.WHITE};
        font-size: ${pxToRem(18)};
        font-weight: 300;
        margin-bottom: ${pxToRem(60)};
        &::before {
            content: '';
            display:block;
            width: ${pxToRem(12)};
            height: ${pxToRem(12)};
            border: 3px solid ${Color.WHITE};
            border-radius: 30px;
            box-sizing: border-box; 
            margin-right: ${pxToRem(10)};
        }
    }
    .caution {
        color: #777;
        font-size: ${pxToRem(13)};
        font-weight: 300;
    }
    .platform {
    margin-top: ${pxToRem(40)};
        h5 {
            color: ${Color.WHITE};
            font-size: ${pxToRem(16)};
            font-weight: 300;
            margin-bottom: ${pxToRem(30)};
        }
        
    }
`;
const DownloadButton = styled(Button)`
    color: ${Color.DARK};
    font-size: ${pxToRem(18)};
    margin-bottom: ${pxToRem(10)};
    img {
        margin-right: ${pxToRem(10)};
    }
`;
const PlatformIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    img {
        margin-right: ${pxToRem(36)};
    }
`;
const Thumbnail = styled.div`
    
`;

export default Item;
