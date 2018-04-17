import types from './types';

export const usersActions = Object.freeze({
    fetchUsers: () => ({
        type:    types.FETCH_USERS,
    }),
    fetchUsersSuccess: (users) => ({
        type:    types.FETCH_USERS_SUCCESS,
        payload: users,
    }), 
    fetchUsersFail: (error) => ({
        type:    types.FETCH_USERS_FAIL,
        payload: error,
        error:   true,
    }),
});
