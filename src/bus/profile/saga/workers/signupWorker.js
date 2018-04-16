import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';

import { api, groupID } from 'config';
import { authActions } from 'bus/auth/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
     
export function* signupWorker ({ payload: user }) {
    try {
        yield put(uiActions.setAuthFetchingState(true));
        const response = yield call(fetch, `${api}/user/${groupID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    
        if (response.status !== 200) {
            throw new Error('Load posts error');
        }
    
        const { data: profile, message } = yield call([response, response.json]);

        yield put(profileActions.fillProfile(profile));
        
        // yield put(profileActions.fillProfile())
        yield put(authActions.signupSuccess());
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(replace('/feed'));
        yield put(actions.reset('forms.signup'));

    } catch (error) {
        yield put(authActions.signupFail(error));     
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }
}
