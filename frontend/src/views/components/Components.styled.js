import styled from 'styled-components'



export const Overlay = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, ${props => props.alpha || 0.5});
    
    ${props => props.center && `
        display:flex;
        justify-content:center;
        align-items:center;    
    `}
    
`;
export const PageTitle = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
`;