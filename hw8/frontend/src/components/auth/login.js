/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as ProfileActions from '../../actions/profileActions'
import * as AuthActions from '../../actions/authActions'
import { url } from '../../util/utils'

const validate = values => {
    const errors = {}

    if (!values.username) {
        errors.username = "Please enter a username."
    }

    if (!values.password) {
        errors.password = "Please enter a password."
    }

    return errors
}

class LoginForm extends React.Component {

    handleFormSubmit = (values) => {
        this.props.loginUser(values.username, values.password)

    }

    renderField = ({ id, input, label, placeholder, type, meta: { touched, error } }) => (
        <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
            <label className="control-label">{label}</label>
            <div >
                <input id={id} {...input} placeholder={placeholder} className="form-control" type={type} />
                {touched && error && <div className="help-block">{error}</div>}
            </div>
        </fieldset>
    )

    render() {
        return(
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="text-center">Log In</h2>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field id="login_username" name="username" type="text" component={this.renderField} label="Username"/>
                        <Field id="login_password" name="password" type="password" component={this.renderField} label="Password" />

                        <button id="login" action="submit" className="btn btn-primary">Log In</button>
                     </form>
                    <a href={`${url}/auth/google/login`} className="btn btn-danger">Login with Google</a>
                    {/*<a href={`${url}/auth/facebook/login`} className="btn btn-info">Login with Facebook</a>*/}
                </div>
            </div>
        )
    }
}


// export default LoginForm
export default connect(
    null,
    {...AuthActions, ...ProfileActions}
)(reduxForm({
    form: 'login',
    validate
})(LoginForm))