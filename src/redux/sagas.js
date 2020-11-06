import {all} from 'redux-saga/effects'
import appSaga from './app/saga'
import authSaga from './auth/saga'
import profileSaga from './profile/saga'

export default function*() {
    yield all([
        appSaga(),
        authSaga(),
        profileSaga(),
    ])
}