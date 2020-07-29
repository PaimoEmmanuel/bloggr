import React from 'react';
import { connect } from 'react-redux';
import BlogPostItem from './BlogPostItem';
import selectBlogPosts from '../selectors/BlogPosts';

const BlogPostList = (props) => (
    <div className="dashboard">
    <h1>Blog List</h1>
    {props.blogPosts.map((blogPost) => <BlogPostItem key={blogPost.title} {...blogPost}/>)}
    </div>
);

const mapStateToProps = (state) => ({
    blogPosts: selectBlogPosts(state.blogPosts, state.filter)
});

export default connect(mapStateToProps)(BlogPostList);
