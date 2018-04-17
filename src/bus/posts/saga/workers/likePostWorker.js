import { call, put, select } from 'redux-saga/effects';

import { api } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* likePostWorker ({ payload: postId }) {
    try {
        yield put(uiActions.setFeedFetchingState(true));
        const token = yield select((state) => state.profile.get('token'));
        const response = yield call(fetch, `${api}/feed/like/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });
    
        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);
            throw new Error(message);
        }
        // const user = yield select((state) => state.profile.remove('avatar').remove('token'));
        // yield put(postsActions.likePostSuccess({ postId, user }));

    } catch (error) {
        yield put(postsActions.likePostFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
