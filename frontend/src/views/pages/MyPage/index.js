import React from 'react';
import styled from 'styled-components';
import {authActions} from "../../../redux/actionCreators";
import firebase from "../../../lib/Firebase";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function MyPage(props) {

    const {} = props;


    const user = firebase.auth().currentUser;

    if (user != null) {
        user.providerData.forEach(function (profile) {
            const id = profile.providerId
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <h3>프로필</h3>
                    <p>회원님의 프로필을 변경할 수있습니다.</p>
                </Text>
                <h3 id></h3>
                <p></p>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    background: ${Color.WHITE};
`
const SContentContainer = styled(ContentContainer)`
    padding: ${pxToRem(80)} 0 ${pxToRem(150)};    
`;
const Text = styled.div`
    
`;
export default MyPage;