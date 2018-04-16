import { Map } from 'immutable';

// Instruments
import types from './types';

const initialState = Map({
    feedFetching: false,
    initialized:  false,
    online:       false,
    authFetching: false,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FEED_FETCHING_STATE:
            return state.set('feedFetching', action.payload);
            
        case types.INITIALIZE:
            return state.set('initialized', true);
            
        case types.SET_ONLINE_STATUS:
            return state.set('online', action.payload);
            
        case types.SET_AUTH_FETCHING_STATE:
            return state.set('authFetching', action.payload);
            
        default:
            return state;
    }
};
