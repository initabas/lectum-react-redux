import { Map } from 'immutable';

import reducer from '../reducer';
import { authActions } from '../actions';

const initialState = Map({
    authenticated: false,
});

describe('auth reducer:', () => {
    test('should return initial state', () => {
        // void 0 === undefined
        expect(reducer(void 0, {})).toEqual(initialState);
    });

    test('should handle LOGOUT_SUCCESS', () => {
        expect(reducer(
            initialState, authActions.logoutSuccess())).toEqual(
            initialState.set('authenticated', false));
    });

    test('should handle AUTHENTICATE_SUCCESS, LOGIN_SUCCESS, SIGNUP_SUCCESS', () => {
        const testState = initialState.set('authenticated', true);
        expect(reducer(
            initialState, authActions.authenticateSuccess())).toEqual(testState);
            
        expect(reducer(
            initialState, authActions.signupSuccess())).toEqual(testState);
            
        expect(reducer(
            initialState, authActions.loginSuccess())).toEqual(testState);
    });
});
