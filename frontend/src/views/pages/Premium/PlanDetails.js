import React from 'react';
import styled from 'styled-components';
import Title from "../../components/Login/Title";
import {PageTitle} from "../../components/Data/Title";
import {LoginContainer} from "../../../common/Layout/Components.Styled";

function PlanDetails (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Title data={PageTitle.premiumDetail}/>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(LoginContainer)`
    
`;
export default PlanDetails;