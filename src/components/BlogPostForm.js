import React from 'react';
import { storage } from '../firebase/firebase';
import moment from 'moment';

// Blog title
// Blog image ***optional caption
// blog quote
// blog content
// creation date
// Publish button
export default class BlogPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.blogPost ? { ...props.blogPost, error: "" } : {
            title: "",
            quote: "",
            content: "",
            image: 0,
            error: ""
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
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.content) {
            this.setState(() => ({ error: "Please add the post title and the content" }))
        } else {
            this.setState(() => ({ error: "" }))
            this.props.onSubmit({ ...this.state });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <label>Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange = {this.onImageChange}/>
                    <input
                        type="text"
                        placeholder="Blog quote"
                        value={this.state.quote}
                        onChange={this.onQuoteChange}
                    />
                    <textarea
                        placeholder="Blog Content"
                        value={this.state.content}
                        onChange={this.onContentChange}
                    />
                    <button type="submit">Publish</button>
                </form>
            </div>
        )
    }
}