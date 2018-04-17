import { authActions } from '../actions';
import types from '../types';

describe('auth actions saga', () => {
    test('authenticate should produce a valid action creator', () => {
        expect(authActions.authenticate(__.token)).toEqual({
            type:    types.AUTHENTICATE,
            payload: __.token,
        });
    });
    
    test('authenticateSuccess should produce a valid action creator', () => {
        expect(authActions.authenticateSuccess()).toEqual({
            type:    types.AUTHENTICATE_SUCCESS,
        });
    });
    
    test('authenticateFail should produce a valid action creator', () => {
        expect(authActions.authenticateFail(__.error)).toEqual({
            type:    types.AUTHENTICATE_FAIL,
            payload: __.error,
            error:   true
        });
    });

    test('signup should produce a valid action creator', () => {
        expect(authActions.signup(__.user)).toEqual({
            type:    types.SIGNUP,
            payload: __.user,
        });
    });
    
    test('signupSuccess should produce a valid action creator', () => {
        expect(authActions.signupSuccess()).toEqual({
            type:    types.SIGNUP_SUCCESS,
        });
    });
    
    test('signupFail should produce a valid action creator', () => {
        expect(authActions.signupFail(__.error)).toEqual({
            type:    types.SIGNUP_FAIL,
            payload: __.error,
            error:   true
        });
    });

    test('login should produce a valid action creator', () => {
        expect(authActions.login(__.credential)).toEqual({
            type:    types.LOGIN,
            payload: __.credential,
        });
    });
    
    test('loginSuccess should produce a valid action creator', () => {
        expect(authActions.loginSuccess()).toEqual({
            type:    types.LOGIN_SUCCESS,
        });
    });
    
    test('loginFail should produce a valid action creator', () => {
        expect(authActions.loginFail(__.error)).toEqual({
            type:    types.LOGIN_FAIL,
            payload: __.error,
            error:   true
        });
    });
    test('logout should produce a valid action creator', () => {
        expect(authActions.logout()).toEqual({
            type:    types.LOGOUT,
        });
    });
    
    test('logoutSuccess should produce a valid action creator', () => {
        expect(authActions.logoutSuccess()).toEqual({
            type:    types.LOGOUT_SUCCESS,
        });
    });
    
    test('logoutFail should produce a valid action creator', () => {
        expect(authActions.logoutFail(__.error)).toEqual({
            type:    types.LOGOUT_FAIL,
            payload: __.error,
            error:   true
        });
    });
    
});


