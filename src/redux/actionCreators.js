import store from './store'
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'
import {Action as authAction} from './auth/redux'
import {Action as profileAction} from './profile/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const authActions = bindActionCreators(authAction.Creators, dispatch);
export const profileActions = bindActionCreators(profileAction.Creators, dispatch);


