import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Blogger App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create-blog" activeClassName="is-active">Create blog</NavLink>
    </header>
);

export default Header;