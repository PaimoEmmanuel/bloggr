import React from 'react';
import { storage } from '../firebase/firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import { auth } from 'firebase';

// Blog title
// Blog image ***optional caption
// blog quote
// blog content
// creation date
// Publish button
export class BlogPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.blogPost ? { ...props.blogPost, error: "" } : {
            title: "",
            quote: "",
            content: "",
            image: "",
            caption: "",
            error: "",
            user: props.auth.uid
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onQuoteChange = (e) => {
        const quote = e.target.value;
        this.setState(() => ({ quote }));
    };
    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    };
    onImageChange = (e) => {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
    }
    onCaptionChange = (e) => {
        const caption = e.target.value;
        this.setState(() => ({ caption }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.title || !this.state.content) {
            this.setState(() => ({ error: "Please add the post title and the content" }))
        } else {
            this.setState(() => ({ error: "" }));
            // console.log(this.state.uid);
            this.props.onSubmit({ ...this.state });
        }
    };

    render() {
        return (
            <div className="blogform-container">
                <form className="blogform"
                onSubmit={this.onSubmit}>
                    {this.state.error && <p className="blogform-error">{this.state.error}!</p>}
                    <label>Blog Title:</label>
                    <input
                    autoFocus={true}
                    className="title-input"
                        type="text"
                        placeholder="Blog Title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <label>Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange = {this.onImageChange}/>
                    <label>Image Caption:</label>
                    <input
                    className="caption-input"
                        type="text"
                        placeholder="Image caption  (optional)"
                        value={this.state.caption}
                        onChange={this.onCaptionChange}
                    />
                    <label>Blog Quote:</label>
                    <input
                    className="quote-input"
                        type="text"
                        placeholder="Blog quote (optional)"
                        value={this.state.quote}
                        onChange={this.onQuoteChange}
                    />
                    <label>Blog Content:</label>
                    <textarea
                        className="blog-textarea"
                        placeholder="Blog Content"
                        value={this.state.content}
                        onChange={this.onContentChange}
                    />
                    <button type="submit">Publish</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(BlogPostForm);