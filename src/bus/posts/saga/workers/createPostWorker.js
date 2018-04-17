import { call, put, select } from 'redux-saga/effects';

import { api } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* createPostWorker ({ payload: comment }) {
    try {
        yield put(uiActions.setFeedFetchingState(true));
        const token = yield select((state) => state.profile.get('token'));
        const response = yield call(fetch, `${api}/feed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({ comment }),
        });
    
        const { data: post, message } = yield call([response, response.json]);
    
        if (response.status !== 200) {
            throw new Error(message);
        }
    
        yield put(postsActions.createPostSuccess(post));

    } catch (error) {
        yield put(postsActions.createPostFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
