// Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles';

// Components
import Like from 'components/Like';

export default class Post extends Component {
    _getCross = () => {
        const { profile, author } = this.props;

        return profile.get('id') === author.get('id') ? (
            <span className = { Styles.cross } onClick = { this._deletePost } />
        ) : null;
    };

    _deletePost = () => {
        const { deletePost, id } = this.props;

        deletePost(id);
    };

    render () {
        const {
            comment,
            created,
            dislikePost,
            id,
            likes,
            likePost,
            profile,
            author,
        } = this.props;

        const cross = this._getCross();

        return (
            <section className = { Styles.post }>
                {cross}
                <img src = { author.get('avatar') } />
                <a>{`${author.get('firstName')} ${author.get('lastName')}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like
                    dislikePost = { dislikePost }
                    id = { id }
                    likePost = { likePost }
                    likes = { likes }
                    profile = { profile }
                />
            </section>
        );
    }
}
