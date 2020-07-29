import React from 'react';
import { connect } from 'react-redux';
import BlogPostForm from './BlogPostForm';
import { startEditBlogPost } from '../actions/BlogPosts';
import Footer from './Footer';

const EditBlogPage = (props) => {
    return  (
        <div>
            <h1 className="create-blog">Edit and update {props.match.params.id}</h1>
            <BlogPostForm blogPost={props.blogPost} onSubmit={(blogPost) => {
                props.dispatch(startEditBlogPost(props.blogPost.id, blogPost));
                props.history.push('/');
            }}/>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    blogPost: state.blogPosts.find((blogPost) => 
    blogPost.title.toLowerCase().split(' ').join('-') === props.match.params.id)
})
export default connect(mapStateToProps)(EditBlogPage);