import React from 'react';
import { Link } from 'react-router-dom';
import { signupAuth } from './Auth';

class SigninPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
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
        signupAuth(this.state.email, this.state.password).then(() => {
            this.props.history.push('/dashboard')
        }).catch((error) =>{
            console.log(error.message);
        });
    };
    render() {
        return (
            <div>
        <form onSubmit={this.onSubmit}>
        <input 
        type="email"
        name="email"
        placeholder = "email"
        onChange={this.onEmailChange}
        />
        <input 
        type="password"
        placeholder = "password"
        onChange={this.onPasswordChange}
        />
        <button
        type="submit"
        > Sign in</button>
        </form>
        <a href ="/signin">Registered? Sign in</a>
    </div>
        )
    }
}
export default SigninPage;