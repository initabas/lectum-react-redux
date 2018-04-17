import { all } from 'redux-saga/effects';

import posts from 'bus/posts/saga/watchers';
import auth from 'bus/auth/saga/watchers';
import users from 'bus/users/saga/watchers';

export function* rootSaga () {
    yield all([
        auth.signupWatcher(),
        auth.loginWatcher(),
        auth.logoutWatcher(),
        auth.authenticateWatcher(),
        posts.createPostWatcher(),
        posts.deletePostWatcher(),
        posts.fetchPostsWatcher(),
        posts.likePostWatcher(),
        posts.dislikePostWatcher(),
        users.fetchUsersWatcher(),
    ]);
}
