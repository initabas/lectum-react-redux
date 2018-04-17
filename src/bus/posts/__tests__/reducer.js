import { postsActions } from '../actions';
import { fromJS } from 'immutable';

const state = fromJS(__.posts);
const user = fromJS(__.profile);

import reducer from '../reducer';

describe('posts reducers:', () => {
    test('should return initial state', () => {
        // void 0 === undefined
        expect(reducer(void 0, {})).toMatchSnapshot();
    });

    test('should handle FETCH_POSTS_SUCCESS', () => {
        expect(reducer(void 0, postsActions.fetchPostsSuccess(__.posts))
        ).toMatchSnapshot();
    });

    test('should handle CREATE_POST_SUCCESS', () => {
        expect(reducer(void 0, postsActions.createPostSuccess(__.post1))
        ).toMatchSnapshot();
    });

    test('should handle DELETE_POST_SUCCESS', () => {
        expect(reducer(state, postsActions.deletePostSuccess(__.post2))
        ).toMatchSnapshot();
    });

    test('should handle LIKE_POST_SUCCESS', () => {
        expect(reducer(state, postsActions.likePostSuccess({
            postId: __.post1.id,
            user,
        }))
        ).toMatchSnapshot();
    });
    
    test('should handle DISLIKE_POST_SUCCESS', () => {
        expect(reducer(state, postsActions.dislikePostSuccess({
            postId: __.post1.id,
            userId: __.post1.likes[0].id,
        }))
        ).toMatchSnapshot();
    });
});
