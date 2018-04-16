import types from './types';

export const uiActions = Object.freeze({
    setFeedFetchingState: (state) => ({
        type:    types.SET_FEED_FETCHING_STATE,
        payload: state,
    }),
    initialize: (state) => ({
        type:    types.INITIALIZE,
    }),
    setOnLineStatus: (state) => ({
        type:    types.SET_ONLINE_STATUS,
        payload: state,
    }),
    setAuthFetchingState: (state) => ({
        type:    types.SET_AUTH_FETCHING_STATE,
        payload: state,
    }),
});
