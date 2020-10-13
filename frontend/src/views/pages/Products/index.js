import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import Caster from "./Caster";
import Chat from "./Chat";
import Cam from "./Cam";
import CamDetail from "./Section/CamDetail";

function Products (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/products/caster'} component={Caster}/>
                <Route path={'/products/chat'} component={Chat}/>
                <Route path={'/products/cam'} component={Cam}/>
                <Route path={'/products/cam/detail'} component={CamDetail}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Products;