/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'

import { Form } from 'formsy-react';

import MyInput from './../input';


Formsy.addValidationRule('isPasswordSame', (values) => {
    // both empty or the same
    if (!values['password'] && !values['passwordConfirmation']) {
        return true
    }
    return values['password'] === values['passwordConfirmation'];
});

const ProfileForm = React.createClass({
    getInitialState() {
        return {
            canSubmit: false,
            email : "",
            zipcode : "",
            password : "password is not shown"
        };
    },
    resetForm: function () {
        this.refs.form.reset();
    },
    submit(data) {
        // alert(JSON.stringify(data, null, 4));
        this.resetForm()

        if (data['email'] != "" || data['zipcode'] != "" ||
            data['password'] != "" || data['passwordConfirmation'] != "") {
            console.log("set state")
            this.setState({
                canSubmit: false,
                email: data.email,
                zipcode: data.zipcode,
                password : "password changed"
            })
        }
    },
    enableButton() {
        this.setState({ canSubmit: true });
    },
    disableButton() {
        this.setState({ canSubmit: false });
    },
    render() {
        const emailMsg = 'This is not a valid email'
        const zipcodeMsg = 'Zipcode should be 5 digits'
        const pwdMsg = 'Passwords should be the same'
        return (
            <Form onSubmit={this.submit} onValid={this.enableButton}
                  onInvalid={this.disableButton} className="login" ref="form">
                <MyInput value="" placeholder="a@b.com" name="email" title="Email" type="text"
                         validations={{
                             matchRegexp: /(^$|[^\s@]+@[^\s@]+\.[^\s@]+)/
                         }} validationError={emailMsg} />
                <span>{this.state.email}</span>
                <MyInput value="" placeholder="77005" name="zipcode" title="Zipcode" type="text"
                         validations={{
                             matchRegexp: /(^$|^\d{5})/
                         }} validationError={zipcodeMsg} />
                <span>{this.state.zipcode}</span>
                <MyInput value="" name="password" title="Password" type="password"/>
                <span>{this.state.password}</span>

                <MyInput value="" name="passwordConfirmation" title="Password Confirmation" type="password"
                         validations="isPasswordSame" validationError={pwdMsg}/>
                <button type="submit" disabled={!this.state.canSubmit}>Update</button>
            </Form>
        );
    }
});


export default ProfileForm