import { takeEvery, call, select } from 'redux-saga/effects';
import { selectDarkTheme } from './homepageSlice';
import { saveThemeInLocalStorage } from './themeLocalStorage';

function* saveThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, darkTheme);
}

export function* watchsaveThemeInLocalStorage() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}