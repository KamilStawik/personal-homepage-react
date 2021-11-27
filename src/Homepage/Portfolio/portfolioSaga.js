import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { fetchRepositoriesFromApi, setRepositories, setApplicationStatus } from './../homepageSlice';
import { getRepositoriesFromApi } from './getRepositoriesFromApi'

const demoDelay = 1000;

function* fetchRepositoriesFromApiHandler() {
    try {
        const repositories = yield call(getRepositoriesFromApi);
        yield delay(demoDelay)
        yield put(setRepositories(repositories))
        //yield call(console.log(repositories))
        yield put(setApplicationStatus("success"))
    } catch (error) {
        yield put(setApplicationStatus("error"))
    }
}

export function* watchFetchRepositoriesFromApi() {
    yield takeEvery(fetchRepositoriesFromApi.type, fetchRepositoriesFromApiHandler);
}