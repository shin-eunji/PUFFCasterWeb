import styled from 'styled-components'
import {pxToRem} from "../Text/Text.Styled";
import {Color} from "../Color/Color.Styled";


export const SContainer = styled.div`
    height: calc(100vh - ${pxToRem(230)});
    background: ${Color.DARK};
`

export const ContentContainer = styled.div`
    width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
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