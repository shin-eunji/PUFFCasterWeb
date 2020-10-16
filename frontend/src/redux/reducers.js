import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as authReducer} from './auth/redux';
import {reducer as profileReducer} from './profile/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
});


export default reducers;