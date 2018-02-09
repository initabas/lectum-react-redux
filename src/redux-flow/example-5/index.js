// Instrumnets
import store from './store';
import { createPost, createPostAsync } from '../core/actions/posts';
import { render, createPostButton, deletePostButton, createPostAsyncButton } from '../core/render';
import { postsDeleter } from '../core/utils';

const deletePost = postsDeleter(store);

// Create post on click
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

// Delete post on click
deletePostButton.addEventListener('click', () => {
    deletePost.next();
});

// Create post async on click
createPostAsyncButton.addEventListener('click', () => {
    store.dispatch(createPostAsync());
});

render(store)();
store.subscribe(render(store));
