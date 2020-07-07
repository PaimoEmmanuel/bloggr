import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/ConfigureStore';
import { createBlogPost, editBlogPost, deleteBlogPost } from './actions/BlogPosts';
import { setTextFilter } from './actions/Filter';
import getFilteredBlogPosts from './selectors/BlogPosts';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getFilteredBlogPosts(state.blogPosts, state.filter);
    console.log(visibleExpenses);
});

store.dispatch(createBlogPost({ title: "A new blog post", content: "Black black black sheep", qoute: "Don't be a black ship" }))
store.dispatch(editBlogPost("A new blog post", { title: "An old blog post" }));
store.dispatch(createBlogPost({ title: "The faith of the son", content: "God is good" }));
store.dispatch(setTextFilter(""));
store.dispatch(deleteBlogPost({ title: "An old blog post" }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));