import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Login">Login: </label>
                <Field name="login" validate={required} component={Input} type="text" placeholder="Login"/>
            </div>
            <div>
                <label htmlFor="Password">Password: </label>
                <Field name="password" validate={required} component={Input} type="text" placeholder="Password"/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox"/> Remember me
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