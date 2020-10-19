import styled from 'styled-components'
import {Color, pxToRem} from "../../lib/Styled";
import {generateMedia} from "styled-media-query";

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "830px",
    mobile: "500px"
});

export const ContentContainer = styled.div`
    max-width: 1170px;
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

export const IconBox = styled.div`
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    
    ${props => props.sort === 'caster' && `
        background: ${Color.TOPAZ};
    `}
    ${props => props.sort === 'play' && `
        background: ${Color.YELLOW};
    `}
    ${props => props.sort === 'cam' && `
        background: ${Color.PURPLE};
    `}
    ${props => props.sort === 'lime' && `
        background: ${Color.LIME};
    `}
`;