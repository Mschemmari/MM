// @flow

import { YellowBox } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import storageOptions from './storage';
import * as reducers from './reducers';
import Logger from '../helpers/logger';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const PURGE_STORAGE = false;

const middlewares = [thunk, Logger.storeLogger()];

/**
 * Create and persist store
 *
 * @param {*} onComplete on complete callback
 */
export const Store = (onComplete = () => { }) => {
    let store = null;
    const reducer = persistCombineReducers(storageOptions, reducers);
    if (__DEV__) store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
    else {
        const enhancer = compose(applyMiddleware(...middlewares));
        store = createStore(reducer, enhancer);
    }

    const persistor = persistStore(store, null, () => onComplete(store));

    PURGE_STORAGE && persistor.purge();

    return store;
};

export default Store;
