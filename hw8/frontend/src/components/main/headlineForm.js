/**
 * Created by yusong on 10/25/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as ProfileActions from '../../actions/profileActions'

class HeadlineForm extends Component {
    handleFormSubmit = (values) => {
        // alert(JSON.stringify(values, null, 4));
        // this.props.updateHeadline(values.newHeadline)
        this.props.putHeadline(values.newHeadline)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <div>
                    <Field id="newHeadline" name="newHeadline" component="input" type="text"/>
                    <button id="headlineBtn" type="submit">Update</button>
                </div>
            </form>
        );
    }
}

// Decorate the form component
HeadlineForm = reduxForm({
    form: 'headline' // a unique name for this form
})(HeadlineForm);

export default connect(null, ProfileActions)(HeadlineForm)