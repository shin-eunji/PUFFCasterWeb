import styled from 'styled-components'
import {pxToRem} from "../Text/Text.Styled";
import {Color} from "../Color/Color.Styled";
import {generateMedia} from "styled-media-query";


export const SContainer = styled.div`
    height: calc(100vh - ${pxToRem(230)});
    background: ${Color.DARK};
`

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "830px",
    mobile: "500px"
});

export const ContentContainer = styled.div`
    width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
    
      ${customMedia.lessThan('desktop')`
        max-width: 830px;    
    `}
    ${customMedia.lessThan('tablet')`
        max-width: 530px;    
    `}
    ${customMedia.lessThan('mobile')`
        max-width: 530px;
    `}
`;
export const LoginContainer = styled.div`
    height: calc(100vh - ${pxToRem(230)});
    background: ${Color.DARK};
    display:flex;
    height: 100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-bottom: ${pxToRem(80)};
`;