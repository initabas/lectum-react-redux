import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';

import { api } from 'config';
import { authActions } from 'bus/auth/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
     
export function* logoutWorker () {
    try {
        const getToken = state => state.profile.get('token');
        const token = yield select(getToken);
        yield put(uiActions.setAuthFetchingState(true));
        console.log(token);
        const response = yield call(fetch, `${api}/user/logout`, {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
        });
    
        if (response.status !== 204) {
            throw new Error('Logout error');
        }
    
        // const { data: profile, message } = yield call([response, response.json]);
        
        localStorage.setItem('@@token', null);
        
        // yield put(profileActions.clearProfile(profile));
        
        yield put(authActions.logoutSuccess());
        // yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        // yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        // yield put(actions.reset('forms.login'));
        yield put(replace('/login'))

    } catch (error) {
        yield put(authActions.logoutFail(error));     
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }
}
