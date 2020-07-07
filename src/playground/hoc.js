import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <p>My info</p>
        <p>This is the info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is classified info, pls don't share</p>
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    
    return (props) => {
        console.log(props);
        return <div>
        {props.isAuth ? <WrappedComponent {...props}/> : <p>Please log in</p>}
        
        </div>
}
};
//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="I am a boy!"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="I am a boy!"/>, document.getElementById('app'));