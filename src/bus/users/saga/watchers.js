import { takeEvery } from 'redux-saga/effects';

import types from 'bus/users/types';
import { fetchUsersWorker } from './workers';

export default Object.freeze({
    * fetchUsersWatcher () {
        yield takeEvery(types.FETCH_USERS, fetchUsersWorker);
    }
});
