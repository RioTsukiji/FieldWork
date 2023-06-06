import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createrSlice, { initialState as createrState } from '@/ducks/create/slice';

const rootReducer = combineReducers({
    creater: createrSlice.reducer,
});

const preloadedState = () => {
    return {creater: createrState};
}

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
    const middlewareList = [...getDefaultMiddleware(), logger];

    return configureStore({
        reducer: rootReducer,
        middleware: middlewareList,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: preloadedState(),
    });
};

export default createStore;