import { List, fromJS } from 'immutable';

// Instruments
import types from './types';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_SUCCESS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
