import React from 'react';
import { Link } from 'react-router-dom'

const BlogPostItem = ({title, quote, date}) => (
    <div>
    
    <h3><a href = {`/view/${title.toLowerCase().split(' ').join('-')}`}>{title}</a></h3>
    <em>{quote}</em>
    <p>Created at {date}</p>
    </div>
);
export default BlogPostItem;