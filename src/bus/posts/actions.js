import types from './types';

export const postsActions = Object.freeze({
    fetchPosts: () => ({
        type:    types.FETCH_POSTS,
    }),
    fetchPostsSuccess: (posts) => ({
        type:    types.FETCH_POSTS_SUCCESS,
        payload: posts,
    }), 
    fetchPostsFail: (error) => ({
        type:    types.FETCH_POSTS_FAIL,
        payload: error,
        error:   true,
    }),
});
