import { takeEvery } from 'redux-saga/effects';

import types from 'bus/auth/types';
import {
    authenticateWorker,
    signupWorker,
    loginWorker,
    logoutWorker
} from './workers';

export default Object.freeze({
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
    * loginWatcher () {
        yield takeEvery(types.LOGIN, loginWorker);
    },
    * logoutWatcher () {
        yield takeEvery(types.LOGOUT, logoutWorker);
    },
    * authenticateWatcher () {
        yield takeEvery(types.AUTHENTICATE, authenticateWorker);
    }
});
