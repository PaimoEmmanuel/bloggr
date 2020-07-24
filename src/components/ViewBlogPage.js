import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


const ViewBlogPage = (props) => (
    <div>
        View bloggggg of {props.match.params.id}
        <h3>Blog title: {props.blogPost.title}</h3>
        <p>Blog image: {props.blogPost.image}</p>
        <img src={props.blogPost.image} />
        <p>image caption: {props.blogPost.caption}</p>
        <p>ID: {props.blogPost.id}</p>
        <p>Blog content: {props.blogPost.content}</p>
        <em>Blog quote: {props.blogPost.quote}</em>
        <p>Date created: {props.blogPost.date}</p>
        <Link to={`/edit/${props.blogPost.title.toLowerCase().split(' ').join('-')}`}>Edit post</Link>
    </div>
);
const mapStateToProps = (state, props) => ({
    blogPost: state.blogPosts.find((blogPost) => 
    blogPost.title.toLowerCase().split(' ').join('-') === props.match.params.id)
})
export default connect(mapStateToProps)(ViewBlogPage);