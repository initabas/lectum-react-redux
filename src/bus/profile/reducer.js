import { Map } from 'immutable';

// Instruments
import types from './types';

const initialState = Map({
    id:        '',
    lastName:  '',
    firstName: '',
    avatar:    '',
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return state.merge(action.payload);

        default:
            return state;
    }
};
