/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as Actions from '../../actions/profileActions'

const validate = values => {
    const errors = {}
    // if none empty and has correct format
    if (values.email && !/(^$|[^\s@]+@[^\s@]+\.[^\s@]+)/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (values.zipcode && !/(^$|^\d{5})/i.test(values.zipcode)) {
        errors.zipcode = 'Zipcode should be 5 digits'
    }

    if (values.password && values.passwordConfirmation &&
        values.password !== values.passwordConfirmation ) {
        errors.password = 'Passwords do not match'
    }

    return errors
}

class ProfileForm extends React.Component {
    handleFormSubmit = (values) => {
        if (values.email) {
            this.props.putEmail(values.email)
        }
        if (values.zipcode) {
            this.props.putZipcode(values.zipcode)
        }
        if (values.password && values.passwordConfirmation &&
            values.password === values.passwordConfirmation) {
            this.props.putPassword(values.password)
        }
    }

    renderField = ({ id, input, label, placeholder, type, meta: { touched, error } }) => (
        <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
            <label className="control-label">{label}</label>
            <div>
                <input id={id} {...input} placeholder={placeholder} className="form-control" type={type} />
                {touched && error && <div className="help-block">{error}</div>}
            </div>
        </fieldset>
    )

    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h2 className="text-center">Profile Update</h2>
                    <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                        <Field id="update_email" name="email" type="text" component={this.renderField} label="Email" placeholder="a@b.com"/>
                        <Field id="update_zipcode" name="zipcode" type="text" component={this.renderField} label="Zipcode" placeholder="77005"/>
                        <Field id="update_password" name="password" type="password" component={this.renderField} label="Password" />
                        <Field id="update_passwordConfirmation" name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />

                        <button id="updateBtn" action="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default ProfileForm
export default connect(
    null,
    Actions
)(reduxForm({
    form: 'profile',
    validate
})(ProfileForm))
