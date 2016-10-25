/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "Please enter an email."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = "Please enter a password."
    }

    return errors
}

class LoginForm extends React.Component {

    handleFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 4));
    }

    renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
        <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
            <label className="control-label">{label}</label>
            <div>
                <input {...input} placeholder={placeholder} className="form-control" type={type} />
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
                        <Field name="email" type="text" component={this.renderField} label="Email" placeholder="a@b.com"/>
                        <Field name="password" type="password" component={this.renderField} label="Password" />

                        <button action="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default LoginForm
export default reduxForm({
    form: 'login',
    validate
})(LoginForm);