import React from 'react';
import { Link } from 'react-router-dom'

const BlogPostItem = ({id, user, title, quote, date}) => {
    //const arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
    //const string = arr[Math.floor((Math.random() * 26) + 1)] + arr[Math.floor((Math.random() * 26) + 1)];
    return (
    <div className="blog-item">
    
    <h3><a className="blog-title" href = {`/view/${user}/${id}`}>{title}</a></h3>
    <p className="blog-quote">{quote}</p>
    <p className="blog-date">Published on {date}</p>
    </div>
)};
export default BlogPostItem;