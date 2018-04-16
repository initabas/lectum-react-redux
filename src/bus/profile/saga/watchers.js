import { takeEvery } from 'redux-saga/effects';

import types from 'bus/posts/types';
import { signupWorker } from './workers';

export default Object.freeze({
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    }
});
