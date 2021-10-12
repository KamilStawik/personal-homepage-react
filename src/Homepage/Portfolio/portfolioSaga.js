import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { fetchRepositoriesFromApi, setRepositories } from './../homepageSlice';
import { getRepositoriesFromApi } from './getRepositoriesFromApi'

const demoDelay = 2000;

function* fetchRepositoriesFromApiHandler() {
    try {
        const repositories = yield call(getRepositoriesFromApi);
        yield delay(demoDelay)
        yield put(setRepositories(repositories))
    } catch (error) {
        // add error handling
    }
}

export function* watchFetchRepositoriesFromApi() {
    yield takeEvery(fetchRepositoriesFromApi.type, fetchRepositoriesFromApiHandler);
}