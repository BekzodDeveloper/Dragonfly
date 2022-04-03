import React from 'react';
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form
            onSubmit={props.handleSubmit}
        >
            <div>
                <label htmlFor="Login">Login: </label>
                <Field name="login" component="input" type="text" placeholder="Login"/>
            </div>
            <div>
                <label htmlFor="Password">Password: </label>
                <Field name="password" component="input" type="text" placeholder="Password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> Remember me
            </div>
            <button type="submit">Submit</button>
        </form>

    );
}

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

// HOC reduxForm for LoginForm
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;