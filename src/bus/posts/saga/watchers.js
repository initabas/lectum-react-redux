import { takeEvery } from 'redux-saga/effects';

import types from 'bus/posts/types';
import { fetchPostsWorker } from './workers';

export default Object.freeze({
    * fetchPostsWatcher () {
        yield takeEvery(types.FETCH_POSTS, fetchPostsWorker);
    }
});
