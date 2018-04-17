import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { api } from 'config';
import { authActions } from 'bus/auth/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
     
export function* authenticateWorker ({ payload: token }) {
    try {
        console.log(token);
        // yield put(uiActions.setAuthFetchingState(true));
        // const token = localStorage.getItem('@@token');
        const response = yield call(fetch, `${api}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        });
    
        if (response.status !== 200) {
            if (response.status === 401) {
                localStorage.removeItem('@@token');
            }
        }
    
        const { data: profile, message } = yield call([response, response.json]);
        
        yield put(uiActions.initialize());
        
        yield put(profileActions.fillProfile(profile));
        
        yield put(authActions.authenticateSuccess());
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        // yield put(actions.reset('forms.login'));

    } catch (error) {
        yield put(authActions.authenticateFail(error));     
    } finally {
        // yield put(uiActions.setAuthFetchingState(false));
    }
}
