// Instruments
import types from './types';
import { Map } from 'immutable';

const initialState = Map({
    authenticated: false,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
            return state.set('authenticated', true);
        case types.LOGOUT_SUCCESS:
            return state.set('authenticated', false);
        default:
            return state;
    }
};
