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
    
    createPost: (comment) => ({
        type:    types.CREATE_POST,
        payload: comment,
    }),
    createPostSuccess: (post) => ({
        type:    types.CREATE_POST_SUCCESS,
        payload: post,
    }), 
    createPostFail: (error) => ({
        type:    types.CREATE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    deletePost: (id) => ({
        type:    types.DELETE_POST,
        payload: id,
    }),
    deletePostSuccess: (id) => ({
        type:    types.DELETE_POST_SUCCESS,
        payload: id,
    }), 
    deletePostFail: (error) => ({
        type:    types.DELETE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    likePost: (postId) => ({
        type:    types.LIKE_POST,
        payload: postId,
    }),
    likePostSuccess: (likedPostIds) => ({
        type:    types.LIKE_POST_SUCCESS,
        payload: likedPostIds,
    }), 
    likePostFail: (error) => ({
        type:    types.LIKE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    dislikePost: (postId) => ({
        type:    types.DISLIKE_POST,
        payload: postId,
    }),
    dislikePostSuccess: (dislikedPostIds) => ({
        type:    types.DISLIKE_POST_SUCCESS,
        payload: dislikedPostIds,
    }), 
    dislikePostFail: (error) => ({
        type:    types.DISLIKE_POST_FAIL,
        payload: error,
        error:   true,
    }),
});
