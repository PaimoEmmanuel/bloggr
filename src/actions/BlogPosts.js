//blogPosts actions generators
export const createBlogPost = ({ title = "", content = "", qoute = "", image = 0, createdAt = 0 } = {}) => ({
    type: "CREATE_BLOG",
    blogPost: {
        title, content, qoute, image, createdAt
    }
});

export const editBlogPost = (prevTitle, updates = {}) => ({
    type: "EDIT_BLOG",
    prevTitle,
    updates
});
export const deleteBlogPost = ({ title }) => ({
    type: "DELETE_BLOG",
    title
});