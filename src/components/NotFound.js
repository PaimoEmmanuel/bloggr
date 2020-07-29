import React from 'react';
import Header from './Header'

const NotFoundPage = () => (
    <div>
    <h1 className="logo"><a href="/">Bloggr</a></h1>
    <div className="notfound">
        <p className="notfound-primary">404!! </p>
        <p className="notfound-secondary">Page not found</p>
        <a href="/">Go home</a>
    </div>
    </div>
    
);
export default NotFoundPage;