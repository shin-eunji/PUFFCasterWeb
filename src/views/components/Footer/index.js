import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import {info} from '../Data/Routes'
import {ContentContainer, customMedia} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {navigate} from "../../../lib/History";
import {useForm} from "react-hook-form";

function Footer(props) {

    const {} = props;

    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    const language = ['한국어', 'English', '中國語']

    return (
        <Container>
            <SContentContainer>
                <Gnb>
                    <Logo>puff</Logo>
                    <Nav>
                        {
                            info.map((item, index) =>
                                <NavItem key={index}
                                         onClick={() => navigate(item.to)}
                                >{item.name}</NavItem>)
                        }
                    </Nav>
                </Gnb>
                <LanguageForm onSubmit={handleSubmit(onSubmit)}>
                    <select name="language" ref={register}>
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                        <option value="ch">中國語</option>
                    </select>
                </LanguageForm>
                <Copyright>Copyright ©Starship Vending-machine. All rights reserved</Copyright>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: #000;
    height: ${pxToRem(150)};
`
const SContentContainer = styled(ContentContainer)`
    position:relative;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    ${customMedia.lessThan('mobile')`
        align-items:flex-start;
    `}
`;
const Gnb = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
    ${customMedia.lessThan('mobile')`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;    
    `}
`;
const Logo = styled.div`
    color: #fff;
    font-size: ${pxToRem(14)};
    font-weight: 900;
    text-transform: uppercase;
    margin-right: ${pxToRem(30)};
`;
const Nav = styled.div`
    display:flex;
    align-items:center;
    ${customMedia.lessThan('mobile')`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        margin-top: ${pxToRem(4)};
    `}
`;
const NavItem = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    color: #ccc;
    font-size: ${pxToRem(14)};
    font-weight: 300;
    margin: 0 ${pxToRem(10)};
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        top: ${pxToRem(3)};
        right: ${pxToRem(-10)};
        width: ${pxToRem(1)};
        height: ${pxToRem(16)};
        background: #222;
    }
    &:last-child::after {
        content: '';
        display: none;
    }
    ${customMedia.lessThan('mobile')`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin: ${pxToRem(4)} 0 0;
        &::after {
            content: '';
            display: none;
        }
    `}
    
    
`;
const LanguageForm = styled.form`
    position: absolute;
    top: ${pxToRem(43)};
    right: ${pxToRem(15)};
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: ${pxToRem(93)};
    height: ${pxToRem(32)};
    background-color: #111;
    overflow: hidden;
    padding: 0 ${pxToRem(12)};
    select {
        background: none;
        border: none;
        width: 100%;
        height: 100%;
        color: #fff;
    }
`;

const Copyright = styled.div`
    display:flex;
    justify-content:center;
    color: #555;
    font-size: ${pxToRem(14)};
    font-weight: 300;
`;

export default withRouter(Footer);