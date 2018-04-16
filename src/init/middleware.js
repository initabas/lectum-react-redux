import { notificationsActions } from 'bus/notifications/actions'

export const customThunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
};

export const notifications = (store) => (next) => (action) => {
    if (action.error) {
        store.dispatch(notificationsActions.invoke(action.payload));
    }
    
    return next(action);
};

