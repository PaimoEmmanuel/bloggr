import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from './Auth';

const Header = (props) => (
    <header className="header">
        <h1 className="logo"><a href="/">Bloggr</a></h1>
        <div className="header-nav">
            <a href="/dashboard" >Home</a>
            <a href="/create-blog">Create blog</a>
            <button onClick={() => {
                signOut().then(() => {
                    console.log(props);
                })
            }}>Log out</button>
        </div>

    </header>
);

export default connect()(Header);