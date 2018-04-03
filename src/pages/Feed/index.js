// Core
import React, { Component } from 'react';
import { fromJS } from 'immutable';

// Components
import { Spinner, Catcher, Wall } from 'components';

export default class Feed extends Component {
    static defaultProps = {
        feedFetching: false,
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
    render () {
        const { actions, feedFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner spin = { feedFetching } />
                <Catcher>
                    <Wall actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
