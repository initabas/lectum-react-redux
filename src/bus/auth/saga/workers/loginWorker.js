import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { api } from 'config';
import { authActions } from 'bus/auth/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
     
export function* loginWorker ({ payload: credentials }) {
    try {
        yield put(uiActions.setAuthFetchingState(true));
        const response = yield call(fetch, `${api}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
    
        if (response.status !== 200) {
            throw new Error('Login error');
        }
    
        const { data: profile, message } = yield call([response, response.json]);
        
        if (credentials.remember) {
            localStorage.setItem('@@token', profile.token);
        }
        
        yield put(profileActions.fillProfile(profile));
        
        yield put(authActions.loginSuccess());
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(actions.reset('forms.login'));

    } catch (error) {
        yield put(authActions.loginFail(error));     
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }
}
