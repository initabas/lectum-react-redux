import { socket } from 'init/socket';
import { uiActions } from '../ui/actions';

export const watchConnection = () => (dispatch) => {
    socket.on('connect', () => {
        dispatch(uiActions.setOnLineStatus(true));
    });
    socket.on('disconect', () => {
        dispatch(uiActions.setOnLineStatus(false));
    });
};

export const watchPosts = () => () => {
    // socket.on('connect', () => {
    //     dispatch(uiActions.setOnLineStatus(true));
    // });
    // socket.on('disconect', () => {
    //     dispatch(uiActions.setOnLineStatus(false));
    // });
};
