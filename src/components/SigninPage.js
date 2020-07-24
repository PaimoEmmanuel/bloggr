import React from 'react';
import { signinAuth } from './Auth';

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
        signinAuth(this.state.email, this.state.password).then(() => {
            //this.props.history.push('/dashboard');
            console.log('Signed in');
        })
        
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

    </div>
        )
    }
}
export default SigninPage;