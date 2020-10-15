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
                    firebase.auth().onAuthStateChanged ((user) => {
                        if(user) {
                            console.log("[Saga Sign In] user", data);
                            navigate('/mypage')
                        } else {
                            console.log("error");
                            navigate('/error/type1')
                        }
                    })
                    navigate('/')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }),

        takeLatest(Action.Types.USER, function* ({data}) {
            console.log("data", data);
            yield firebase.auth().onAuthStateChanged ((user) => {
                if(user) {
                    console.log("[Saga Sign In] user", data);
                    navigate('/mypage')
                } else {
                    console.log("error");
                    navigate('/error/type1')
                }
            })

        }),

        takeLatest(Action.Types.SIGN_OUT, function* ({data}) {
            console.log("[Saga Sign Out] data", data);
            yield firebase.auth().signOut()
                .then(res => {
                    console.log("[Saga Sign Out] res", res);
                    navigate('/products/caster')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }),
    ])
}