import {bindActionCreators} from "redux";
import store from './store'

import {Action as appAction} from './app/redux'
import {Action as authAction} from './auth/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const authActions = bindActionCreators(authAction.Creators, dispatch);
