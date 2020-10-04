import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export default store;