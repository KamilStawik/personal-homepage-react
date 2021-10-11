import { all } from '@redux-saga/core/effects';
import { watchFetchRepositoriesFromApi } from './Homepage/Portfolio/portfolioSaga';
import { watchsaveThemeInLocalStorage } from './Homepage/themeSaga';

export default function* rootSaga() {
    yield all([
        watchFetchRepositoriesFromApi(),
        watchsaveThemeInLocalStorage(),
    ]);
}