import { all } from 'redux-saga/effects';

import posts from 'bus/posts/saga/watchers';
import auth from 'bus/auth/saga/watchers';

export function* rootSaga () {
    console.log(auth);
    yield all([auth.signupWatcher(), auth.loginWatcher(), posts.fetchPostsWatcher()]);
}
