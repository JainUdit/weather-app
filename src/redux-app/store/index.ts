import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { createStore, applyMiddleware, Store, compose } from "redux";
import { BaseAction } from "../actions/BaseAction";
import { IWeatherGlobalState } from "../interfaces/IWeatherGlobalState";
import { rootReducer } from "../reducers";
import { rootSaga } from "../sagas";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState: IWeatherGlobalState = {} as IWeatherGlobalState;

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store<any, BaseAction<any>> = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;