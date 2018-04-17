import { call, put, select } from 'redux-saga/effects';

import { api } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* deletePostWorker ({ payload: postId }) {
    try {
        yield put(uiActions.setFeedFetchingState(true));
        const token = yield select((state) => state.profile.get('token'));
        const response = yield call(fetch, `${api}/feed/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token,
            },
        });
    
        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);
            throw new Error(message);
        }
    
        yield put(postsActions.deletePostSuccess(postId));

    } catch (error) {
        yield put(postsActions.deletePostFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
