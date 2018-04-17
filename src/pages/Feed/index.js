// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';

// Components
import { Spinner, Navigation, Catcher, Wall, Notifications } from 'components';

import { postsActions } from 'bus/posts/actions';
import { usersActions } from 'bus/users/actions';

const mapStateToProps = (state, props) => {
    
    // console.log('state: ', state, props);
    return {
        posts:        state.posts,
        feedFetching: state.ui.get('feedFetching'),
        authFetching: state.ui.get('authFetching'),
        profile:      state.profile,
    }
}

const mapDispatchToProps = (dispatch, props) => {

    // console.log('dispatch: ', dispatch, props);
    return {
        actions: bindActionCreators({
            ...postsActions,
            // fetchPosts: postsActions.fetchPosts,
            // createPost: postsActions.createPost,
            // deletePost: postsActions.deletePost,
            // likePost: postsActions.likePost,
            // dislikePost: postsActions.dislikePost,
            ...usersActions,
            // fetchUsers: usersActions.fetchUsers,
        }, dispatch),
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Feed extends Component {
    // static defaultProps = {
    //     profile:      fromJS({
    //         id:     '123',
    //         avatar:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg',
    //         firstName: 'Cat',
    //     }),
    //     actions: {
    //         fetchPosts: () => {},
    //         fetchUsers: () => {},
    //         createPost: () => {},
    //     },
    //     posts: [],
    // };

    // componentDidMount () {
    //     this.props.fetchPosts([]);
    // }

    render () {
        const { actions, authFetching, feedFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner spin = { feedFetching || authFetching } />
                <Navigation />
                <Notifications />
                <Catcher>
                    <Wall actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
