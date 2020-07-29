import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { strartSetBlogPosts, startDeleteBlogPost } from '../actions/BlogPosts'
import Footer from './Footer';
const createMarkup = (x) => ({__html: x});
const ViewBlogPage = (props) => {
    console.log(props);
    const postID = props.location.pathname.slice(props.location.pathname.length - 20, props.location.pathname.length)
    //console.log(postID);
    const blogID = props.location.pathname.slice(props.location.pathname.length - 49, props.location.pathname.length)
    const userID = blogID.slice(0, blogID.length - 21);
    //console.log(props);
    if (props.blogPost) {
        return (
            <div>
                <h1 className="logo"><a href="/">Bloggr</a></h1>
                <div className="viewblog">
                    {/*View bloggggg of {props.match.params.id}*/}
                    <h1 className="viewblog-title">{props.blogPost.title}</h1>
                    <p className="viewblog-date">Published on {props.blogPost.date}</p>
                    {/*<p>Blog image: {props.blogPost.image}</p>*/}
                    <img src={props.blogPost.image} />
                    <div className="viewblog-caption">
                        <p>{props.blogPost.caption}</p>
                    </div>
                    {/*<p>ID: {props.blogPost.id}</p>*/}
                    <p className="viewblog-quote-sign">"</p>
                    <p className="viewblog-quote">{props.blogPost.quote}</p>
                    {/*<p className="viewblog-quote-sign">"</p>*/}
                    <div className="viewblog-content">
                        <p dangerouslySetInnerHTML={createMarkup(props.blogPost.content.replace(/(?:\r\n|\r|\n)/g, '<br>'))}></p>
                    </div>
                    {props.auth.uid === userID ? 
                        <form className="viewblog-form">
                        <input readOnly={true} id="link" value={`localhost:8080${props.location.pathname}`}/>
                        <button className="signup-button" onClick={(e) => {
                            e.preventDefault();
                            const copyText = document.getElementById("link");
                            copyText.select();
                            copyText.setSelectionRange(0, 99999);
                            document.execCommand("copy");
                            alert("Link has been copied to your clipboard");
                        }}>Copy share link</button>
                        </form> :
                    <div></div>}
                    {props.auth.uid === userID ? <Link className="signup-button" to={`/edit/${props.blogPost.title.toLowerCase().split(' ').join('-')}`}>Edit post</Link> : <div></div>}
                    {props.auth.uid === userID ? <button disabled={props.auth.uid === "zGw5pkvZ3vaETH7Mqtmx7RtwJMD3"} className="signup-button" onClick={() => {
                        props.dispatch(startDeleteBlogPost(props.blogPost.id, props.blogPost.image));
                        props.history.push('/');
                    }}>Delete Post</button> : <div></div>}
                </div>
                <Footer />
            </div>
        )
    } else {
        props.dispatch(strartSetBlogPosts(userID));
        return <div></div>
    }

    ;
}
const mapStateToProps = (state, props) => ({
    blogPost: state.blogPosts.find((blogPost) =>
        blogPost.id === props.location.pathname.slice(props.location.pathname.length - 20, props.location.pathname.length)),
    auth: state.auth
})
export default connect(mapStateToProps)(ViewBlogPage);