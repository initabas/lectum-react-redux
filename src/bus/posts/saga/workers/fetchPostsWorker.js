import { call, put, select } from 'redux-saga/effects';

import { api, groupID } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* fetchPostsWorker () {
    try {
        yield put(uiActions.setFeedFetchingState(true));
        const response = yield call(fetch, `${api}/feed`, {
            method: 'GET',
            headers: {
                'x-no-auth': groupID,
            },
        });
    
        if (response.status !== 200) {
            throw new Error('Load posts error');
        }
    
        const { data: posts, message } = yield call([response, response.json]);

        yield put(postsActions.fetchPostsSuccess(posts));

    } catch (error) {
        yield put(postsActions.fetchPostsFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
