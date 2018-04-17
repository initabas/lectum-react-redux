import { socket } from 'init/socket';
import { uiActions } from '../ui/actions';
import { postsActions } from '../posts/actions';

export const watchConnection = () => (dispatch) => {
    socket.on('connect', () => {
        dispatch(uiActions.setOnLineStatus(true));
    });
    socket.on('disconect', () => {
        dispatch(uiActions.setOnLineStatus(false));
    });
};

export const watchPosts = () => (dispatch, getState) => {
    socket.on("like", (response) => {
        const { meta, data } = JSON.parse(response);
        // Get self likes not from websocket
        // const userId = getState().profile.get('id');
        // if (userId === meta.userID) {
            // return null;
        // }

        if (meta.action === 'like') {
            const user = getState()
                .users.find((user) => user.get('id') === data.userID)
                .delete('avatar');

            dispatch(postsActions.likePostSuccess({ postId: data.postID, user }));
        } else if (meta.action === 'dislike') {
            dispatch(postsActions.dislikePostSuccess({ postId: data.postID, userId: data.userID }));
        }
    });

    socket.on("create", (response) => {
        const { meta, data } = JSON.parse(response);
        const userId = getState().profile.get('id');
        if (userId === meta.userID) {
            return null;
        }
        dispatch(postsActions.createPostSuccess(data));
    });

    socket.on("remove", (response) => {
        const { meta, data } = JSON.parse(response);
        const userId = getState().profile.get('id');
        if (userId === meta.userID) {
            return null;
        }
        dispatch(postsActions.deletePostSuccess(data));
    });

};

