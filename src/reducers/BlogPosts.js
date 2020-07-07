//Blog post reducer
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
export default blogPostsReducer;