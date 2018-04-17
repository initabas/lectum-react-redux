import { postsActions } from '../actions';
// import types from '../types';

describe('posts actions', () => {
    test('fetchPosts should produce a valid action creator', () => {
        expect(postsActions.fetchPosts()).toMatchSnapshot();
    });
    test('fetchPostsSuccess should produce a valid action creator', () => {
        expect(postsActions.fetchPostsSuccess(__.posts)).toMatchSnapshot();
    });
    test('fetchPostsFail should produce a valid action creator', () => {
        expect(postsActions.fetchPostsFail(__.error)).toMatchSnapshot();
    });

    test('createPost should produce a valid action creator', () => {
        expect(postsActions.createPost(__.comment)).toMatchSnapshot();
    });
    test('createPostSuccess should produce a valid action creator', () => {
        expect(postsActions.createPostSuccess(__.post1)).toMatchSnapshot();
    });
    test('createPostFail should produce a valid action creator', () => {
        expect(postsActions.createPostFail(__.error)).toMatchSnapshot();
    });

    test('deletePost should produce a valid action creator', () => {
        expect(postsActions.deletePost(__.postId)).toMatchSnapshot();
    });
    test('deletePostSuccess should produce a valid action creator', () => {
        expect(postsActions.deletePostSuccess(__.postId)).toMatchSnapshot();
    });
    test('deletePostFail should produce a valid action creator', () => {
        expect(postsActions.deletePostFail(__.error)).toMatchSnapshot();
    });

    test('likePost should produce a valid action creator', () => {
        expect(postsActions.likePost(__.postId)).toMatchSnapshot();
    });
    test('likePostSuccess should produce a valid action creator', () => {
        expect(postsActions.likePostSuccess(__.likedPostIds)).toMatchSnapshot();
    });
    test('likePostFail should produce a valid action creator', () => {
        expect(postsActions.likePostFail(__.error)).toMatchSnapshot();
    });

    test('dislikePost should produce a valid action creator', () => {
        expect(postsActions.dislikePost(__.postId)).toMatchSnapshot();
    });
    test('dislikePostSuccess should produce a valid action creator', () => {
        expect(postsActions.dislikePostSuccess(__.likedPostIds)).toMatchSnapshot();
    });
    test('dislikePostFail should produce a valid action creator', () => {
        expect(postsActions.dislikePostFail(__.error)).toMatchSnapshot();
    });
    
});


