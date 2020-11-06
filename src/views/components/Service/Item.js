import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";
import {Button} from "../../../common/Button/Button.Styled";
import {Images} from "../../../common/Images";

function Item (props) {

    const {
        sort,
        downloadIcon,
        download,
        comment,
        caution,
    } = props;

    return (
        <Container>
            <SContentContainer>
                <DownloadButton sort={sort}
                                size={'medium'}
                >
                    <img src={downloadIcon} alt="Download"/>
                    {download}
                </DownloadButton>
                <div className="caution">{caution}</div>
                <Comment>{comment}</Comment>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    height: ${pxToRem(390)};
    background: ${Color.DARK};
    &::before {
        content: '';
        position: absolute;
        top: ${pxToRem(30)};
        left: ${pxToRem(60)};
        width: ${pxToRem(300)};
        height: ${pxToRem(330)};
        background: url(${Images.service_parttern1});
        z-index: 10;
    }
    &::after {
        content: '';
        position: absolute;
        top: ${pxToRem(30)};
        right: ${pxToRem(60)};
        width: ${pxToRem(390)};
        height: ${pxToRem(330)};
        background: url(${Images.service_parttern2});
        z-index: 10;
    }
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top: ${pxToRem(140)};
    z-index: 100;
    .caution {
        color: #777;
        font-size: ${pxToRem(14)};
        font-weight: 300;
        margin-top: ${pxToRem(10)};
    }
`;
const DownloadButton = styled(Button)`
    display:flex;
    align-items:center;
    img {
        margin-right: ${pxToRem(7)};
    }
`;
const Comment = styled.div`
    color: ${Color.WHITE};
    font-size: ${pxToRem(24)};
    font-weight: 300;
    margin-top: ${pxToRem(60)};
`;
export default Item;