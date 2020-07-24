import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import blogPostsReducer from '../reducers/BlogPosts';
import filterReducer from '../reducers/Filter';
import authReducer from '../reducers/Auth';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(combineReducers({
        blogPosts: blogPostsReducer,
        filter: filterReducer,
        auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
