import { createStore, combineReducers } from 'redux';

//blogPosts actions generators
const createBlogPost = ({ title = "", content = "", qoute = "", image = 0, createdAt = 0 } = {}) => ({
    type: "CREATE_BLOG",
    blogPost: {
        title, content, qoute, image, createdAt
    }
});

const editBlogPost = (prevTitle, { title = "", content = "", qoute = "", image = 0, createdAt = 0 } = {}) => ({
    type: "EDIT_BLOG",
    prevTitle,
    updates: { title, content, qoute, image, createdAt }
});
const deleteBlogPost = ({ title }) => ({
    type: "DELETE_BLOG",
    title
});

//Set text filter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})
const blogPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "CREATE_BLOG":
            return [
                ...state,
                action.blogPost
            ];
        case "EDIT_BLOG":
            return state.map((blogPost) => {
                if (blogPost.title === action.prevTitle) {
                    return {
                        ...blogPost,
                        ...action.updates
                    };
                } else { return blogPost }
            });
        case "DELETE_BLOG":
            return state.filter(({ title }) => title != action.title)

        default:
            return state;
    }
};

const filterReducer = (state = { searchText: '' }, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                searchText: action.text
            };

        default:
            return state;
    }
};
//Get filtered blogPosts
const getFilteredBlogPosts = (blogPosts, { searchText }) => {
    return blogPosts.filter((blogPost) => {
        if (blogPost.title.toLowerCase().includes(searchText.toLowerCase())) {
            return blogPost;
        }
    });
}

const store = createStore(combineReducers({
    blogPosts: blogPostsReducer,
    filter: filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleBlogPosts = getFilteredBlogPosts(state.blogPosts, state.filter)
    console.log(visibleBlogPosts);
});

store.dispatch(createBlogPost({
    title: "A new man",
    content: "A b c d e f",
    qoute: "A born is a born",
    image: 88,
    createdAt: 0
}));

store.dispatch(createBlogPost());
store.dispatch(editBlogPost("A new man", {
    title: "A old man",
    qoute: "A born is a"
}));
store.dispatch(editBlogPost("", {
    title: "A oga boy"
}));
//store.dispatch(deleteBlogPost({title: "A old man"}));

store.dispatch(setTextFilter("a og"))
const demoState = {
    blogPosts: [{
        title: "A new man",
        content: "A b c d e f",
        qoute: "A born is a born",
        image: 88,
        createdAt: 0
    }],
    filter: {
        searchText: "new"
    }
}
