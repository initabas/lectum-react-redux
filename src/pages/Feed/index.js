// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';

// Components
import { Spinner, Catcher, Wall, Notifications } from 'components';

import { postsActions } from 'bus/posts/actions';

const mapStateToProps = (state) => {

    return {
        posts: state.posts,
        feedFetching: state.ui.get('feedFetching'),
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators({
            fetchPosts: postsActions.fetchPosts,
        }, dispatch),
    }

}

@connect(mapStateToProps, mapDispatchToProps)
export default class Feed extends Component {
    static defaultProps = {
        profile:      fromJS({
            id:     '123',
            avatar:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg',
            firstName: 'Cat',
        }),
        actions: {
            fetchPosts: () => {},
            fetchUsers: () => {},
            createPost: () => {},
        },
        posts: [],
    };

    // componentDidMount () {
    //     this.props.fetchPosts([]);
    // }

    render () {
        const { actions, feedFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner spin = { feedFetching } />
                <Notifications />
                <Catcher>
                    <Wall actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
