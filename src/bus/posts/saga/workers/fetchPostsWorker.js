import { call, put, select } from 'redux-saga/effects';

import { api, groupID } from 'config';
import { postsActions } from 'bus/posts/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* fetchPostsWorker () {
    try {
        yield put(uiActions.setFeedFetchingState(true));
        const token = yield select((state) => state.profile.get('token'));
        const response = yield call(fetch, `${api}/feed`, {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
        });
    
        const { data: posts, message } = yield call([response, response.json]);
    
        if (response.status !== 200) {
            throw new Error(message);
        }
    
        yield put(postsActions.fetchPostsSuccess(posts));

    } catch (error) {
        yield put(postsActions.fetchPostsFail(error));     
    } finally {
        yield put(uiActions.setFeedFetchingState(false));
    }
}
