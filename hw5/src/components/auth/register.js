/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'

import { Form } from 'formsy-react';

import MyInput from './../input';


Formsy.addValidationRule('isPasswordSame', (values) => {
    return values['password'] === values['passwordConfirmation'];
});

const RegisterForm = React.createClass({
    getInitialState() {
        return { canSubmit: false };
    },
    submit(data) {
        alert(JSON.stringify(data, null, 4));
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
            <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
                <MyInput value="" name="username" title="Username" type="text" required />
                <MyInput value="" name="email" title="Email" validations="isEmail"
                         validationError={emailMsg} required />
                <MyInput value="" name="zipcode" title="Zipcode" type="text"
                         validations={{
                        matchRegexp: /^\d{5}/
                    }} validationError={zipcodeMsg} required />
                <MyInput value="" name="password" title="Password" type="password" required />
                <MyInput value="" name="passwordConfirmation" title="Password Confirmation" type="password"
                         validations="isPasswordSame" validationError={pwdMsg} required />
                <button type="submit" disabled={!this.state.canSubmit}>Register</button>
            </Form>
        );
    }
});


export default RegisterForm