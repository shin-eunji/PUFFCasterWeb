import React from 'react';
import styled from 'styled-components';
import {dots} from "../Data/Routes";
import {Color} from "../../../common/Color/Color.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Dots(props) {

    const {
        sort
    } = props;

    return (
        <Container>
            <DotContainer>
                {
                    dots.map((item, index) =>
                        (<Dot key={index}
                              className={item}
                              isActive={sort === item}
                        />)
                    )
                }
            </DotContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: ${pxToRem(32)};
`
const DotContainer = styled.div`
    display:flex;
    align-items:center;
    width: ${pxToRem(55)};
    height: ${pxToRem(24)};
    border-radius: ${pxToRem(10)};
    background: #000;
    padding: ${pxToRem(8)} ${pxToRem(3)};
`;
const Dot = styled.div`
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    background: #fff;
    margin: 0 ${pxToRem(4)};
    border-radius: ${pxToRem(8)};
    opacity: .4;
    cursor: pointer;
    ${props => props.isActive && `
        opacity: 1;    
    `}
    
    &.caster {
        background: ${Color.TOPAZ};
    } 
    &.chat {
        background: ${Color.YELLOW};
    }
    &.cam {
        background: ${Color.PURPLE};
    }
`;
export default Dots;