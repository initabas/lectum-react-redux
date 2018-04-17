import { takeEvery } from 'redux-saga/effects';

import types from 'bus/posts/types';
import { fetchPostsWorker,
        createPostWorker,
        deletePostWorker,
        likePostWorker,
        dislikePostWorker
} from './workers';

export default Object.freeze({
    * fetchPostsWatcher () {
        yield takeEvery(types.FETCH_POSTS, fetchPostsWorker);
    },
    * createPostWatcher () {
        yield takeEvery(types.CREATE_POST, createPostWorker);
    },
    * deletePostWatcher () {
        yield takeEvery(types.DELETE_POST, deletePostWorker);
    },
    * likePostWatcher () {
        yield takeEvery(types.LIKE_POST, likePostWorker);
    },
    * dislikePostWatcher () {
        yield takeEvery(types.DISLIKE_POST, dislikePostWorker);
    }
});
