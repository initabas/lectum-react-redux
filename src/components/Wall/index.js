// Core
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Instruments
import Styles from './styles';

// Components
import { Composer, Catcher, Post, Counter } from 'components';

export default class Wall extends Component {
    componentDidMount () {
        this.props.actions.fetchPosts();
        this.props.actions.fetchUsers();
    }

    render () {
        const { actions, posts: postsData, profile } = this.props;

        const posts = postsData.map((post) => {
            return (
                <CSSTransition
                    classNames = { {
                        enter:       Styles.postInStart,
                        enterActive: Styles.postInEnd,
                        exit:        Styles.postOutStart,
                        exitActive:  Styles.postOutEnd,
                    } }
                    key = { post.get('id') }
                    timeout = { { enter: 400, exit: 500 } }>
                    <Catcher>
                        <Post
                            author = { post.get('author') }
                            comment = { post.get('comment') }
                            created = { post.get('created') }
                            deletePost = { actions.deletePost }
                            dislikePost = { actions.dislikePost }
                            id = { post.get('id') }
                            likePost = { actions.likePost }
                            likes = { post.get('likes') }
                            profile = { profile }
                        />
                    </Catcher>
                </CSSTransition>
            );
        });

        return (
            <section className = { Styles.wall }>
                <Composer createPost = { actions.createPost } profile = { profile } />
                <Counter count = { posts.size } />
                <TransitionGroup>{posts}</TransitionGroup>
            </section>
        );
    }
}
