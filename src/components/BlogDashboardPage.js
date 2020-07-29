import React from 'react';
import BlogPostList from './BlogPostsList';
import BlogPostListFilter from './BlogPostListFilter';

const BlogDashboardPage = () => (
    <div>
        <BlogPostListFilter />
        <BlogPostList />
    </div>
);
export default  BlogDashboardPage;