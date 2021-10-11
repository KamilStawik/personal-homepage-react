import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchRepositoriesFromApi, setRepositories } from './../homepageSlice';
import { getRepositoriesFromApi } from './getRepositoriesFromApi'

function* fetchRepositoriesFromApiHandler() {
    try {
        const repositories = yield call(getRepositoriesFromApi);
        yield put(setRepositories(repositories))
    } catch (error) {
        // add error handling
    }
}

export function* watchFetchRepositoriesFromApi() {
    yield takeEvery(fetchRepositoriesFromApi.type, fetchRepositoriesFromApiHandler);
}