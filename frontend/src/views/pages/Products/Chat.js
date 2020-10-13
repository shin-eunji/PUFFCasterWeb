import React from 'react';
import styled from 'styled-components';

import {productsData as ProductData} from "../../components/Data/Products";
import {featureData as FeatureData} from "../../components/Data/Feature";

import Visual from "../../components/Visual";
import Features from "./Section";
import Service from "./Service";
import Footer from "./Footer";

function Chat (props) {

    const {} = props;

    return (
        <Container>
            <Visual data={ProductData.chat}/>

            <Features data={FeatureData.chat}/>

            <Service data={ProductData.chat}/>

            <Footer/>
        </Container>
    )
}

const Container = styled.div`
`
export default Chat;