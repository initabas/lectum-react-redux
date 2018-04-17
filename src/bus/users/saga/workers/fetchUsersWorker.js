import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';

import { api } from 'config';
import { usersActions } from 'bus/users/actions';
import { uiActions } from 'bus/ui/actions';
     
export function* fetchUsersWorker () {
    try {
        yield put(uiActions.setAuthFetchingState(true));
        const token = yield select((state) => state.profile.get('token'));
        const response = yield call(fetch, `${api}/user/all`, {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
        });
    
        const { data: users, message } = yield call([response, response.json]);
        
        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fetchUsersSuccess(users));
    } catch (error) {
        yield put(usersActions.fetchUsersSuccess(error));     
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }
}
