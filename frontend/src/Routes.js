import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";

import Products from "./views/pages/Products";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products'} component={Products} />

                <Redirect from={'/'} to={'/products/caster'}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;