import React from 'react';
import { connect } from 'react-redux';
import BlogPostForm from './BlogPostForm';
import { startEditBlogPost, startDeleteBlogPost } from '../actions/BlogPosts'

const EditBlogPage = (props) => {
    return  (
        <div>
            Editttttttttt of {props.match.params.id}
            <BlogPostForm blogPost={props.blogPost} onSubmit={(blogPost) => {
                props.dispatch(startEditBlogPost(props.blogPost.id, blogPost));
                props.history.push('/');
            }}/>
            <button onClick={() => {
                props.dispatch(startDeleteBlogPost(props.blogPost.id));
                props.history.push('/');
            }}>Delete Post</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    blogPost: state.blogPosts.find((blogPost) => 
    blogPost.title.toLowerCase().split(' ').join('-') === props.match.params.id)
})
export default connect(mapStateToProps)(EditBlogPage);