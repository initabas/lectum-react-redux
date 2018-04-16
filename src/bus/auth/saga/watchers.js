import { takeEvery } from 'redux-saga/effects';

import types from 'bus/auth/types';
import { signupWorker, loginWorker } from './workers';

export default Object.freeze({
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
    * loginWatcher () {
        yield takeEvery(types.LOGIN, loginWorker);
    }
});
