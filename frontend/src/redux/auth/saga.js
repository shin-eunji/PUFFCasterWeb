import {all, takeLatest} from 'redux-saga/effects'
import {Action} from './redux'
import firebase from '../../lib/Firebase'
import {navigate} from "../../lib/History";


export default function*() {
    yield all([
        takeLatest(Action.Types.SIGN_UP, function* ({data}) {
            console.log("[Saga Sign Up] data", data);
            yield firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("[Saga Sign Up] res", res);
                    navigate('/products/caster')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }),

        takeLatest(Action.Types.SIGN_IN, function* ({data}) {
            console.log("data", data);
            yield firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("res", res)
                    navigate('/')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        })
    ])
}