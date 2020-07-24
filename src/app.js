import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import history from 'history/browser';
import configureStore from './store/ConfigureStore';
import { strartSetBlogPosts, createBlogPost, editBlogPost, deleteBlogPost } from './actions/BlogPosts';
import { signin, signout } from './actions/Auth';
import getFilteredBlogPosts from './selectors/BlogPosts';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getFilteredBlogPosts(state.blogPosts, state.filter);
//     console.log(visibleExpenses);
// });

// store.dispatch(createBlogPost({ title: "A new blog post", content: "Black black black sheep", quote: "Don't be a black ship" }))
// store.dispatch(createBlogPost({ title: "The faith of the son", content: "God is good", quote: "He authored and finished this faith" }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(signin(user.uid));
        console.log('uid', user.uid);
        store.dispatch(strartSetBlogPosts()).then(() => {
            renderApp();
            history.push('/dashboard'); 
        })
    } else{
        store.dispatch(signout());
        renderApp();
        history.push('/'); 
    }
})
