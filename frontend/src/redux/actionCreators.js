import store from './store'
import {bindActionCreators} from "redux";

import {Action as AppAction} from './app/redux'
import {Action as AuthAction} from './auth/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);


