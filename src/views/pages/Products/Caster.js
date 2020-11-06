import React from 'react';
import styled from 'styled-components';

import {productsData as ProductData} from "../../components/Data/Products";
import {featureData as FeatureData} from "../../components/Data/Feature";

import Visual from "../../components/Visual";
import Features from "../../components/Section";
import Service from "../../components/Service";

function Caster(props) {

    const {} = props;

    return (
        <Container>
            <Visual data={ProductData.caster}/>

            <Features data={FeatureData.caster}/>

            <Service data={ProductData.caster}/>
        </Container>
    )
}

const Container = styled.div`
    
`

export default Caster;