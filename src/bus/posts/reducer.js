// Instruments
import types from './types';
import { List, fromJS } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return fromJS(action.payload);
            
        case types.CREATE_POST_SUCCESS:
            return state.unshift(fromJS(action.payload));
            
        case types.DELETE_POST_SUCCESS:
            return state.filter((post) => post.get('id') !== action.payload);

        case types.LIKE_POST_SUCCESS:
            const postIdToLike = state.findIndex((post) => post.get('id') === action.payload.postId);
            return state.updateIn(
                [postIdToLike, 'likes'], (likedBy) => 
                    likedBy.push(action.payload.user)
            );

        case types.DISLIKE_POST_SUCCESS:
            const postIdToDislike = state.findIndex((post) => post.get('id') === action.payload.postId);
            return state.updateIn(
                [postIdToDislike, 'likes'], (likedBy) => 
                    likedBy.filter((me) => me.get('id') !== action.payload.userId)
            );

        default:
            return state;
    }
};
