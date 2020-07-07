import { createStore, combineReducers } from 'redux';
import blogPostsReducer from '../reducers/BlogPosts';
import filterReducer from '../reducers/Filter';

export default () => {
    const store = createStore(combineReducers({
        blogPosts: blogPostsReducer,
        filter: filterReducer
    }));
    return store;
}
