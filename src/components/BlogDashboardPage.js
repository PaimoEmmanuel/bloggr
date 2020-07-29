import React from 'react';
import BlogPostList from './BlogPostsList';
import BlogPostListFilter from './BlogPostListFilter';
import Footer from './Footer';

const BlogDashboardPage = () => (
    <div>
        <BlogPostListFilter />
        <BlogPostList />
        <Footer />
    </div>
);
export default  BlogDashboardPage;