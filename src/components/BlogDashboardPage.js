import React from 'react';
import BlogPostList from './BlogPostsList';
import BlogPostListFilter from './BlogPostListFilter';

const BlogDashboardPage = () => (
    <div>
        <BlogPostListFilter />
        <BlogPostList />
        <footer className="signup-footer">
                <a href="https://github.com/PaimoEmmanuel" target="_blank">Built by Paimo</a>
                 <a href="https://twitter.com/paimo_emmanuel" target="_blank">Follow me on Twitter</a></footer>
    </div>
);
export default  BlogDashboardPage;