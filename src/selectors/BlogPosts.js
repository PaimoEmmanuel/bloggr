//Get filtered blogPosts
const getFilteredBlogPosts = (blogPosts, { searchText }) => {
    return blogPosts.filter((blogPost) => {
        if (blogPost.title.toLowerCase().includes(searchText.toLowerCase())) {
            return blogPost;
        }
    });
}

export default getFilteredBlogPosts;