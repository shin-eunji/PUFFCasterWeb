import styled from 'styled-components';
import {pxToRem} from "../Text/Text.Styled";
import {Color} from "../Color/Color.Styled";

export const ButtonGroup = styled.button`
    position:relative;
    display:flex;
    justify-content:center;
    > * {
          margin: 0 ${pxToRem(5)};
      &:first-child {
          margin-left: ${pxToRem(0)};
      }
      &:last-child {
          margin-right: ${pxToRem(0)};
      }
    }
    
    ${props => props.left && `
        justify-content: flex-start;    
    `}
    ${props => props.right && `
        justify-content: flex-end;    
    `}
    
`;

export const Button = styled.button`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: ${pxToRem(18)};
    font-weight:bold;
    background-color: transparent;
    background-image: none;
    white-space: nowrap;
    text-align:center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    border: 1px solid transparent;
    border-radius: ${pxToRem(6)};
    &:focus {
        outline: 0;
    }
    
    ${props => props.sort === 'caster' && `
        background: ${Color.TOPAZ};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'chat' && `
        background: ${Color.YELLOW};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'cam' && `
        background: ${Color.PURPLE};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'lime' && `
        background: ${Color.LIME};
        color: ${props.disabled ? '#151ad40' : '#151a1d'};
    `}
    ${props => props.sort === 'dark' && `
        background: ${Color.DARK};
        border-radius: 6px;
        color: ${props.disabled ? '#fff' : '#fff'};
    `}
    ${props => props.sort === 'line' && `
        background: #fff;
        border: 1px solid #222;
        border-radius: 6px;    
        color: ${props.disabled ? '#222222' : '#222222'};
    `}
    
    ${props => props.full && `
        width: 100%;
    `}
    ${props => props.size === 'small' && `
        width: ${pxToRem(90)};   
        height: ${pxToRem(40)};
        font-size: ${pxToRem(16)};
        line-height: 1.18;  
    `}
    ${props => props.size === 'medium' && `
        width: ${pxToRem(246)};   
        height: ${pxToRem(60)};
        font-size: ${pxToRem(18)};
        line-height: 1.18;
    `}
    ${props => props.size === 'large' && `
        height: ${pxToRem(60)}      
    `}
    
`;