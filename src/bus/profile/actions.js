import types from './types';

export const profileActions = Object.freeze({
    fillProfile: (profile) => ({
        type:    types.FILL_PROFILE,
        payload: profile,
    }),
});
