import {all, takeLatest} from 'redux-saga/effects'
import {Action} from "./redux";
import firebase from '../../lib/Firebase'
import {navigate} from "../../lib/History";


export default function* () {
    yield all([
        takeLatest(Action.Types.SIGNUP, function* ({data}) {
            console.log("data", data);
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("res", res);
                    navigate('/')
                })
                .catch(function (error) {
                    console.log("error", error);
                })
        }),

        takeLatest(Action.Types.SIGNIN, function* ({data}) {
            console.log("data", data);
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("res", res);
                    navigate('/')
                })
                .catch(function (error) {
                    console.log("error", error);
                })
        })
    ])
}