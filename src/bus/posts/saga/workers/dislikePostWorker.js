import { call, put, select } from 'redux-saga/effects';

import { api } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* dislikePostWorker ({ payload: postId }) {
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
    
        const userId = yield select((state) => state.profile.get('id'));
        yield put(postsActions.dislikePostSuccess({ postId, userId }));

    } catch (error) {
        yield put(postsActions.dislikePostFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
