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
import MyPage from "./views/pages/MyPage";
import Terms from "./views/pages/Help/Terms";
import Policy from "./views/pages/Help/Policy";
import Faq from "./views/pages/Help/Faq";
import PlanDetails from "./views/pages/Premium/PlanDetails";
import Pay from "./views/pages/Premium/Pay";

function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/products'} component={Products} />
                <Route exact path={'/premium'} component={Premium} />
                <Route path={'/premium/detail'} component={PlanDetails} />
                <Route path={'/premium/pay'} component={Pay} />
                <Route path={'/more'} component={More} />

                <Route path={'/login'} component={Login} />

                <Route path={'/sign'} component={Sign}/>
                <Route path={'/users/password/new'} component={PasswordNew}/>

                <Route path={'/users/password/reset'} component={PasswordReset}/>
                <Route path={'/email'} component={Email}/>
                <Route path={'/mypage'} component={MyPage}/>

                <Route path={'/error'} component={Error}/>

                <Route path={'/terms'} component={Terms}/>
                <Route path={'/policy'} component={Policy}/>
                <Route path={'/faq'} component={Faq}/>

                <Redirect from={'/'} to={'/products/caster'}/>
                <Redirect from={'/premium'} to={'/premium/plan'}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;