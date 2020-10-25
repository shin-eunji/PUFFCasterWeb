import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";

import Products from "./views/pages/Products";
import Premium from "./views/pages/Premium";
import More from "./views/pages/More";

import SignIn from "./views/pages/Sign/SignIn";
import SignUp from "./views/pages/Sign/SignUp";
import PasswordNew from "./views/pages/Sign/user/PasswordNew";
import PasswordReset from "./views/pages/Sign/user/PasswordReset";
import Email from "./views/pages/Sign/user/Email";
import Error from "./views/pages/Error/index";
import MyPage from "./views/pages/MyPage";
import Terms from "./views/pages/Help/Terms";
import Policy from "./views/pages/Help/Policy";
import Faq from "./views/pages/Help/Faq";
import PlanDetails from "./views/pages/Premium/PlanDetails";
import Pay from "./views/pages/Premium/Pay";
import PrivateRoute from "./PrivateRoute";
import TypeHome from "./views/pages/Error/TypeHome";

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

                <Route path={'/signin'} component={SignIn} />
                <Route path={'/signup'} component={SignUp}/>

                <Route path={'/users/password/new'} component={PasswordNew}/>
                <Route path={'/users/password/reset'} component={PasswordReset}/>

                <Route path={'/email'} component={Email}/>
                <PrivateRoute path={'/mypage'} component={MyPage}/>


                <Route path={'/terms'} component={Terms}/>
                <Route path={'/policy'} component={Policy}/>

                <Route path={'/error/type1'} component={TypeHome}/>

                <Route path={'/faq'} component={Faq}/>

                <Redirect exact from={'/'} to={'/products/caster'}/>

                <Redirect to={'/error/type1'} />

            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;