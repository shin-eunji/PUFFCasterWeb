import React from 'react';
import styled from 'styled-components';

import Routes from "./Routes";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";



function App () {

    return (
        <Container>
            <Header/>
            <Routes/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;