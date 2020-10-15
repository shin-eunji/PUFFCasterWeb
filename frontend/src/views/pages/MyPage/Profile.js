import React from 'react';
import styled from 'styled-components';
import Title from "./Contents/Title";
import ProfileContents from "./Contents/ProfileContents";

function Profile(props) {

    const {} = props;

    return (
        <Container>
            <Title title={'프로필'}
                   description={'회원님의 프로필을 변경할 수있습니다.'}
            />
            <ProfileContents />
        </Container>
    )
}

const Container = styled.div`

`
export default Profile;