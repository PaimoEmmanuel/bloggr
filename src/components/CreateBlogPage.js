import React from 'react';
import BlogPostForm from './BlogPostForm';
import { connect } from 'react-redux';
import Footer from './Footer'
import { startCreateBlogPost } from '../actions/BlogPosts';

const CreateBlogPage = (props) => (
    <div>
        <h1 className="create-blog">Compose and publish a post.</h1>
        <BlogPostForm onSubmit={(blogPost) => {
            console.log(blogPost);
            props.dispatch(startCreateBlogPost(blogPost));
            props.history.push('/');
        }}/>
        <Footer />
    </div>
);
export default connect()(CreateBlogPage);