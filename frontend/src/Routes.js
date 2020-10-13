import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";

import Products from "./views/pages/Products";
import Premium from "./views/pages/Premium";
import More from "./views/pages/More";

import Login from "./views/pages/Login";
import Sign from "./views/pages/Login/Sign";
import PasswordNew from "./views/pages/Login/user/PasswordNew";
import PasswordReset from "./views/pages/Login/user/PasswordReset";
import Email from "./views/pages/Login/user/Email";
import Error from "./views/pages/Error/index";
import CamDetail from "./views/pages/Products/Section/CamDetail";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products'} component={Products} />
                <Route path={'/premium'} component={Premium} />
                <Route path={'/more'} component={More} />

                <Route path={'/login'} component={Login} />

                <Route path={'/sign'} component={Sign}/>
                <Route path={'/users/password/new'} component={PasswordNew}/>

                <Route path={'/users/password/reset'} component={PasswordReset}/>
                <Route path={'/email'} component={Email}/>

                <Route path={'/error'} component={Error}/>

                <Redirect from={'/'} to={'/products/caster'}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;