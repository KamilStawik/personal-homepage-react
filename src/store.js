import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homepageReducer from './features/homepage/homepageSlice';
import { watchFetchRepositoriesFromApi } from './features/homepage/homepageSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchRepositoriesFromApi);

export default store;