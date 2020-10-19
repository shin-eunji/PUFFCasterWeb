import React, {useEffect} from 'react';
import styled from 'styled-components';

import Routes from "./Routes";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
import {authActions} from "./redux/actionCreators";
import {useSelector} from "react-redux";
import ProfilePopup from "./views/components/Popup/ProfilePopup";
import {HISTORY} from "./lib/History";



function App () {
    
    useEffect(() => {
            authActions.getUserInfo()
            HISTORY.listen((location, action) => {
                if(action === 'PUSH') {
                    window.scrollTo(0, 0)
                }
            })
    },[])

    const { popup } = useSelector(state => state.profile)

    return (
        <Container>
            <Header/>
            <Routes/>
            <Footer/>

            {
                popup &&
                <ProfilePopup/>
            }
        </Container>
    )
}

const Container = styled.div`
`
export default App;