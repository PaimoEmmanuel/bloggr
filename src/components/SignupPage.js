import React from 'react';
import { Link } from 'react-router-dom';
import { signupAuth, signinAuth } from './Auth';

class SigninPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.password.length < 8) {
            this.setState(() => ({ error: "Password must be at least 8 characters" }))
        } else {
            signupAuth(this.state.email, this.state.password).then(() => {
                this.props.history.push('/dashboard')
            }).catch((error) => {
                this.setState(() => ({ error: error.message }))
                console.log(error.message);
            });
        }

    };
    render() {
        return (
            <div className="signup">
                <h1 className="logo"><a href="/">Bloggr</a></h1>
                <div className="signup-container">
                    <div className="signup-texts">
                        <div className="signup__header">
                            <h1 className="signup__header--primary">Create & share <br></br>
                        blog posts easily.</h1>
                            <p className="signup__header--secondary">Save stress and time with <span>Bloggr</span>. <br></br>
                        Think Medium, but a faster and free one.</p>
                        </div>

                        <form onSubmit={this.onSubmit} className="signup-form">
                            {this.state.error && <p className="signup-error">{this.state.error}</p>}
                            <input
                                className="signup-input"
                                type="email"
                                name="email"
                                placeholder="email"
                                onChange={this.onEmailChange}
                            />
                            <input
                                className="signup-input"
                                type="password"
                                placeholder="password"
                                onChange={this.onPasswordChange}
                            />
                            <button
                                className="signup-button"
                                type="submit"
                            > Sign up</button>
                            <button
                                className="signup-button-sample"
                                onClick={(e) => {
                                    e.preventDefault();
                                    signinAuth("jkbkjbjl@jhk.com", "12345678")
                                }}
                            > Sample User</button>
                        </form>
                        <a href="/signin">Registered? Sign in</a>
                    </div>
                    <div className="signup__img">
                        <img src="images/phone.png" />
                    </div>
                </div>
                <footer className="signup-footer">
                <a href="https://github.com/PaimoEmmanuel" target="_blank">Built by Paimo</a> 
                <a href="https://twitter.com/paimo_emmanuel" target="_blank">Follow me on Twitter</a></footer>
            </div>
        )
    }
}
export default SigninPage;