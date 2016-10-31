/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}

    if (!values.username) {
        errors.username = "Please enter a username."
    }

    if (!values.email) {
        errors.email = "Please enter an email."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.zipcode) {
        errors.zipcode = "Please enter zipcode"
    } else if (!/^\d{5}/i.test(values.zipcode)) {
        errors.zipcode = 'Zipcode should be 5 digits'
    }

    if (!values.password) {
        errors.password = "Please enter a password."
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = "Please enter a password confirmation."
    }

    if (values.password !== values.passwordConfirmation ) {
        errors.password = 'Passwords do not match'
    }

    return errors
}

class RegisterForm extends React.Component {
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
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field name="username" type="text" component={this.renderField} label="Username"/>
                        <Field name="email" type="text" component={this.renderField} label="Email" placeholder="a@b.com"/>
                        <Field name="zipcode" type="text" component={this.renderField} label="Zipcode" placeholder="77005"/>
                        <Field name="password" type="password" component={this.renderField} label="Password" />
                        <Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />

                        <button action="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default RegisterForm
export default reduxForm({
    form: 'register',
    validate
})(RegisterForm)

