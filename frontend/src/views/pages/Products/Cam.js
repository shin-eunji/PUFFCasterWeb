import React from 'react';
import styled from 'styled-components';

import {productsData as ProductData} from "../../components/Data/Products";
import {featureData as FeatureData} from "../../components/Data/Feature";

import Visual from "../../components/Visual";
import Features from "./Section";
import Service from "./Service";

function Cam (props) {

    const {} = props;

    return (
        <Container>
            <Visual data={ProductData.cam}/>

            <Features data={FeatureData.cam}/>

            <Service data={ProductData.cam}/>
        </Container>
    )
}

const Container = styled.div`
`
export default Cam;