/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'

import { Form } from 'formsy-react';

import MyInput from './../input';

const LoginForm = React.createClass({
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
        return (
            <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
                <MyInput value="" name="username" title="Username" type="text" required />
                <MyInput value="" name="password" title="Password" type="password" required />
                <button type="submit" disabled={!this.state.canSubmit}>Log In</button>
            </Form>
        );
    }
});


export default LoginForm