import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from './Auth';

const Header = () => (
    <header>
        <h1>Blogger App</h1>
        <a href="/dashboard" activeClassName="is-active" exact={true}>Home</a>
        <a href="/create-blog" activeClassName="is-active">Create blog</a>
        <button onClick = {() => {
            signOut().then(() => {
                //console.log(props);
            })
        }}>Log out</button>
    </header>
);

export default connect()(Header);