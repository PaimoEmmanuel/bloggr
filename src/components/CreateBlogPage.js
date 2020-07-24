import React from 'react';
import BlogPostForm from './BlogPostForm';
import { connect } from 'react-redux';
import { startCreateBlogPost } from '../actions/BlogPosts';

const CreateBlogPage = (props) => (
    <div>
        <h1>createeeeeee</h1>
        <BlogPostForm onSubmit={(blogPost) => {
            props.dispatch(startCreateBlogPost(blogPost));
            props.history.push('/');
        }}/>
    </div>
);
export default connect()(CreateBlogPage);