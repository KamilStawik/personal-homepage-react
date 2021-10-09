import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homepageReducer from './Homepage/homepageSlice';
import { watchFetchRepositoriesFromApi } from './Homepage/homepageSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchRepositoriesFromApi);

export default store;